import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  children: any
}

const isAuthenticated = () => {
  const token = localStorage.getItem('userToken');
  if (token) {
    return true
  } else {
    return false
  }
}

const PublicRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authTokem = isAuthenticated()
  if (authTokem) {
    return <Navigate to={'/dashboard'} />
  }
  return children ? children : <Outlet />
}

export default PublicRoute