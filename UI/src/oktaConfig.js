// src/oktaConfig.js
export default {
    clientId: '0oal7l35408IJVGOP5d7',
    issuer: 'https://dev-86227105.okta.com/oauth2/default/',
    redirectUri: 'http://localhost:3001/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    devMode: true
  };
  