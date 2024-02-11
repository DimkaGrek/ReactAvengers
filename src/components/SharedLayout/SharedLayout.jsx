import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
