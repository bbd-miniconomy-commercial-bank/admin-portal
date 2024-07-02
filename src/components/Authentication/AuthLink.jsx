import React from 'react';
import { cognitoConfig } from './CognitoConfig.jsx';
import { useLoaderData, useNavigate } from "react-router-dom";

const getLoginUrl = () => {
  return `https://${cognitoConfig.domain}/login?response_type=code&client_id=${cognitoConfig.clientId}&scope=${cognitoConfig.scope}&redirect_uri=${encodeURIComponent(cognitoConfig.redirectUri)}`;
};

export const LoginLink = () => (
  <a href={getLoginUrl()} >
    <button>Login</button>
  </a>
);

export const LogoutLink = () => (
  <a>
    <button onClick={() => {
      localStorage.clear();
      useNavigate("/unauthorized")
    }}>
      Logout
    </button>
  </a>
);