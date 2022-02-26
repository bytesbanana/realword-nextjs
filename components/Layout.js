import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from 'store/auth';
import Header from './Header';

const Layout = ({ children }) => {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(authActions.setUser(JSON.parse(user)));
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
