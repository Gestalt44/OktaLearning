import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import Books from './Books';
import oktaConfig from "./oktaConfig"
const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  window.location.replace(originalUri || '/');
};
const oktaAuth = new OktaAuth(oktaConfig);
const App = () => {
  return (
    <BrowserRouter>
      <Security restoreOriginalUri={restoreOriginalUri} oktaAuth={oktaAuth}>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />

          {/* Okta Callback */}
          <Route path="/login/callback" element={<LoginCallback />} />

          {/* Protected Route for accessing /books */}
          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <Books />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Security>
    </BrowserRouter>
  );
};

export default App;
