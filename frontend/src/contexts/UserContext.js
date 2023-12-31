import { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(getUserFromLocalStorage());
  const [tokenInContext, setTokenInContext] = useState(getTokenFromLocalStorage());

  function getTokenFromLocalStorage() {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return null;
  }

  function getUserFromLocalStorage() {
    const token = getTokenFromLocalStorage();
    if (token) {
      const user = jwtDecode(token);
      return user;
    }
    return null;
  }

  function logInUserByToken(token) {
    localStorage.setItem('token', token);
    const user = getUserFromLocalStorage();
    setLoggedInUser(user);
    setTokenInContext(token);
  }

  function logOutUser() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    setTokenInContext(null);
    setLoggedInUser(null);
  }

  useEffect(() => {
    getUserFromLocalStorage();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{
      loggedInUser, setLoggedInUser, logInUserByToken, logOutUser, tokenInContext,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}
