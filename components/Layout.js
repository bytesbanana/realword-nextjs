import React from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
