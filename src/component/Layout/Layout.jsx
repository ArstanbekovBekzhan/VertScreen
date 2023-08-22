import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import GoBackButton from '../goBackButton';

const Layout = () => {
  const location = useLocation();

  const isNotHomePage = location.pathname !== '/';

  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
        {isNotHomePage?<GoBackButton/>:null}
      </main>
    </>
  );
};

export default Layout;
