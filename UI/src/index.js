// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { OktaAuth } from '@okta/okta-auth-js'; // Correct import
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import oktaConfig from "./oktaConfig"
const oktaAuth = new OktaAuth(oktaConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);
