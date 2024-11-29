import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  const logout = async () => {
    await oktaAuth.signOut();
  };

  return (
    <div>
      <h1>Welcome to the Okta React Example!</h1>
      {!authState || !authState.isAuthenticated ? (
        <button onClick={login}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Home;
