import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import App from '../../App';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import NewArticleForm from './NewArticleForm';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('New Article adding by admin', () => {
  test('If there is no loggedInUser I get navigated to NotFound page', async () => {
    const loggedInUser = null;
    render(
      <UserContext.Provider value={{ loggedInUser }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <MemoryRouter initialEntries={['/admin/news']}>
            <App />
          </MemoryRouter>
        </CartContext.Provider>
      </UserContext.Provider>,
    );
    const titleElement = screen.queryByText('Hoppá! A keresett oldal nem található.');
    expect(titleElement).toBeInTheDocument();
  });
  test('If I navigate to /admin/news as logged in, but non admin user I get the NotAdmin error component', async () => {
    const loggedInUser = { name: 'John Doe' };

    render(
      <UserContext.Provider value={{ loggedInUser }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <MemoryRouter initialEntries={['/admin/news']}>
            <App />
          </MemoryRouter>
        </CartContext.Provider>
      </UserContext.Provider>,
    );
    const titleElement = screen.queryByText('Sajnáljuk, de nincs megfelelő jogosultságod az oldal megtekintéséhez.');
    expect(titleElement).toBeInTheDocument();
  });
  test('If the user is an admin, can get the "Új hír hozzáadása" button', async () => {
    const loggedInUser = { name: 'John Doe', isAdmin: 'true' };

    render(
      <UserContext.Provider value={{ loggedInUser }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <MemoryRouter initialEntries={['/admin/news']}>
            <App />
          </MemoryRouter>
        </CartContext.Provider>
      </UserContext.Provider>,
    );
    const buttonElement = screen.getByText('Új hír hozzáadása');
    expect(buttonElement).toBeInTheDocument();
  });
  test('Admin pushes the button then the form appears', async () => {
    const loggedInUser = { name: 'John Doe', isAdmin: 'true' };

    render(
      <UserContext.Provider value={{ loggedInUser }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <MemoryRouter initialEntries={['/admin/news']}>
            <App />
          </MemoryRouter>
        </CartContext.Provider>
      </UserContext.Provider>,
    );
    const buttonElement = screen.getByText('Új hír hozzáadása');
    fireEvent.click(buttonElement);
    await waitFor(() => {
      const titleElement = screen.queryByText('Új hír hozzáadása');
      const labelElement = screen.queryByText('Cím');
      const inputElement = screen.queryByPlaceholderText('Szöveg*');
      expect(titleElement).toBeInTheDocument();
      expect(labelElement).toBeInTheDocument();
      expect(inputElement).toBeInTheDocument();
    });
  });
  test('Admin fills out the form incorrectly than fetch is not called', async () => {
    const loggedInUser = { name: 'John Doe', isAdmin: 'true' };
    const tokenInContext = 'token';
    const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({}),
      ok: true,
    });

    render(
      <UserContext.Provider value={{ loggedInUser, tokenInContext }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <BrowserRouter>
            <NewArticleForm>
              <App />
            </NewArticleForm>
          </BrowserRouter>
        </CartContext.Provider>
      </UserContext.Provider>,
    );

    const inputTitleElement = screen.queryByPlaceholderText('Cím*');
    const inputContentElement = screen.queryByPlaceholderText('Szöveg*');
    const submitButtonElement = screen.getByText('Mentés');
    fireEvent.change(inputTitleElement, { target: { value: '' } });
    fireEvent.change(inputContentElement, { target: { value: 'Az új hír tartalma' } });
    fireEvent.click(submitButtonElement);
    await waitFor(() => {
      expect(fetchSpy).not.toHaveBeenCalled();
    });
  });
  test('Admin fills the form and submits then fetch is being called with the right params and input fields get empty', async () => {
    const loggedInUser = { name: 'John Doe', isAdmin: 'true' };
    const tokenInContext = 'token';
    const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({}),
      ok: true,
    });

    render(
      <UserContext.Provider value={{ loggedInUser, tokenInContext }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <BrowserRouter>
            <NewArticleForm>
              <App />
            </NewArticleForm>
          </BrowserRouter>
        </CartContext.Provider>
      </UserContext.Provider>,
    );

    const inputTitleElement = screen.queryByPlaceholderText('Cím*');
    const inputContentElement = screen.queryByPlaceholderText('Szöveg*');
    const submitButtonElement = screen.getByText('Mentés');
    fireEvent.change(inputTitleElement, { target: { value: 'Az új hír címe' } });
    fireEvent.change(inputContentElement, { target: { value: 'Az új hír tartalma' } });
    fireEvent.click(submitButtonElement);
    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledTimes(1);
      expect(fetchSpy).toHaveBeenCalledWith(`${process.env.REACT_APP_API_BASE_URL}/api/admin/news`, {
        method: 'POST',
        body: JSON.stringify({
          title: 'Az új hír címe',
          content: 'Az új hír tartalma',
        }),
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer token',
        },
      });
      expect(inputTitleElement.value).toBe('');
      expect(inputContentElement.value).toBe('');
    });
  });
  test('If fetch fails an the error message appears', async () => {
    const loggedInUser = { name: 'John Doe', isAdmin: 'true' };
    const tokenInContext = 'token';
    const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        error: 'Hibaüzenet a backendről.',
      }),
      status: 400,
    });

    render(
      <UserContext.Provider value={{ loggedInUser, tokenInContext }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <BrowserRouter>
            <NewArticleForm>
              <App />
            </NewArticleForm>
          </BrowserRouter>
        </CartContext.Provider>
      </UserContext.Provider>,
    );

    const inputTitleElement = screen.queryByPlaceholderText('Cím*');
    const inputContentElement = screen.queryByPlaceholderText('Szöveg*');
    const submitButtonElement = screen.getByText('Mentés');
    fireEvent.change(inputTitleElement, { target: { value: 'Az új hír címe' } });
    fireEvent.change(inputContentElement, { target: { value: 'Az új hír tartalma' } });
    fireEvent.click(submitButtonElement);

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledTimes(1);
      expect(screen.getByText('Hibaüzenet a backendről.')).toBeInTheDocument();
    });
  });
  test('Checking fetch calls from /admin/news page - should be 3 fetch: 1 get, 1 post and 1 get again', async () => {
    const loggedInUser = { name: 'John Doe', isAdmin: 'true' };
    const tokenInContext = 'token';
    const fetchSpy = jest.spyOn(global, 'fetch');
    fetchSpy.mockResolvedValueOnce({});
    fetchSpy.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue({}),
      ok: true,
    });
    fetchSpy.mockResolvedValueOnce({});

    render(
      <UserContext.Provider value={{ loggedInUser, tokenInContext }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <MemoryRouter initialEntries={['/admin/news']}>
            <App />
          </MemoryRouter>
        </CartContext.Provider>
      </UserContext.Provider>,
    );
    const buttonElement = screen.getByText('Új hír hozzáadása');
    fireEvent.click(buttonElement);

    const inputTitleElement = screen.queryByPlaceholderText('Cím*');
    const inputContentElement = screen.queryByPlaceholderText('Szöveg*');
    const submitButtonElement = screen.getByText('Mentés');
    fireEvent.change(inputTitleElement, { target: { value: 'Az új hír címe' } });
    fireEvent.change(inputContentElement, { target: { value: 'Az új hír tartalma' } });
    fireEvent.click(submitButtonElement);
    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledTimes(3);
      expect(fetchSpy).toHaveBeenCalledWith(`${process.env.REACT_APP_API_BASE_URL}/api/admin/news`, {
        method: 'POST',
        body: JSON.stringify({
          title: 'Az új hír címe',
          content: 'Az új hír tartalma',
        }),
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer token',
        },
      });
      expect(inputTitleElement.value).toBe('');
      expect(inputContentElement.value).toBe('');
    });
  });
});
