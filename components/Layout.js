import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'store/auth';
import Header from './Header';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch(authActions.setUser(user));
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
