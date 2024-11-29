import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OktaAuth } from '@okta/okta-auth-js';

const Callback = ({ oktaAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Handle the redirect callback to process tokens
        await oktaAuth.handleRedirectCallback();

        // Retrieve authenticated user's information
        const user = await oktaAuth.getUser();
        console.log('Authenticated User:', user);

        // Navigate to a post-login page (e.g., home or dashboard)
        navigate('/');
      } catch (err) {
        console.error('Error handling the redirect callback:', err);
        // Handle callback errors here (e.g., show an error page)
        navigate('/error');
      }
    };

    handleCallback();
  }, [oktaAuth, navigate]);

  return <div>Loading...</div>;
};

export default Callback;
