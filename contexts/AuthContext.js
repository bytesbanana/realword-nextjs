import React, { createContext, useEffect, useReducer, useState } from 'react';
import { API_BASE_URL } from 'lib/const';

const initialState = {
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext(initialState);

const getUserFromStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    return null;
  }
};

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState();
  const [user, setUser] = useState(() => getUserFromStorage());
  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsAuth(true);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuth(false);
    setUser(null);
  };

  useEffect(() => {
    setIsAuth(!!user);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isAuth, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
