import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
