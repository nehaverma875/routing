import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const PrivateRoute = ({ ...rest }) => {
  const isLoggedIn = useSelector(state=>state.login.isLoggedIn)
  return isLoggedIn ? <Outlet {...rest}/> : <Navigate to={"/"} />
};

export default PrivateRoute;
