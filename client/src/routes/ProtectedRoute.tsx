import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthorization } from '../context/AuthContext';

const ProtectedRoute = ({children}:{children: React.ReactNode}) => {
  const {token}= useAuthorization();
  const isUserValid = ():boolean => {
    return !!token;
  }
    
  return isUserValid() ? children : <Navigate to="/login"/>;
}

export default ProtectedRoute;