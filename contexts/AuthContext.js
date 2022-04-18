import React, { createContext, useEffect, useReducer, useState } from 'react';
import { API_BASE_URL } from 'lib/const';
import useLocalStorage from 'lib/hooks/useLocalStorage';

const initialState = {
  state: {
    isAuthenticated: false,
    user: null,
  },
  dispatch: ({ type, payload }) => {},
};

const AuthContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      localStorage.removeItem('user');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        dispatch({ type: 'LOGIN', payload: { user } });
      }
    } catch (error) {}
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
