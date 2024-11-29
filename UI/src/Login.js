// src/Login.js
import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Login = () => {
  const { oktaAuth } = useOktaAuth();

  const handleLogin = async () => {
    await oktaAuth.signInWithRedirect();
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
};

export default Login;
