import React, { createContext, useEffect, useState } from 'react';
import { API_BASE_URL } from 'lib/const';

const initialState = {
  isLoading: true,
  isLoggedIn: false,
  user: null,
  logout: () => {},
};

const AuthContext = createContext(initialState);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(`/api/user`);
      setIsLoading(false);
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        return;
      }

      setUser(null);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn: user !== null,
        user,
        logout: () => {
          setUser(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
