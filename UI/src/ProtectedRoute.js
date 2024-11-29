import React from 'react';
import { Navigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const ProtectedRoute = ({ children }) => {
  const { authState } = useOktaAuth();

  if (!authState || authState.isPending) {
    return <div>Loading...</div>; // Show a loading indicator while auth state is loading
  }

  if (!authState.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
