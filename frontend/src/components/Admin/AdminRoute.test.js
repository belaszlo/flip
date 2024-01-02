import {
  render, screen,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

describe('Admin route checking', () => {
  test('If I navigate to /admin/news as without login, i get the NotFound error component', async () => {
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

  test('If I navigate to /admin/news as logged in Admin, I get the News component', async () => {
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
});
