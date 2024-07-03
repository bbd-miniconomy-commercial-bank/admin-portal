import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Navigate, useNavigate } from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts.jsx";
import Transactions from "./pages/Transactions/Transactions.jsx";
import Loans from "./pages/Loans/Loans.jsx";
import DebitOrders from "./pages/DebitOrders/DebitOrders.jsx";
import Main from "./layouts/Main/Main.jsx";
import Login from "./pages/Login/Login.jsx";
import Error from "./pages/Error/Error.jsx";
import Callback from './components/Callback/Callback.jsx';
import { awsConfig } from '../aws-config.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  /*const setupLogin = () => {
    setIsLoggedIn(true);
  }*/

  const handleLogin = () => {
    //const loginUrl = `https://${cognitoConfig.domain}/login?response_type=code&client_id=${cognitoConfig.clientId}&scope=${cognitoConfig.scope}&redirect_uri=${encodeURIComponent(cognitoConfig.redirectUri)}`;
    //window.location.href = loginUrl;
    //useNavigate('/callback')
    setIsLoggedIn(true);
  };
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Main isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> : <Navigate to="/login" />,
      errorElement: <Error />,
      children: [
        { path: "admin/accounts", element: <Accounts />, errorElement: <Error /> },
        { path: "admin/accounts/:accountName", element: <Accounts />, errorElement: <Error /> },
        { path: "admin/transactions", element: <Transactions />, errorElement: <Error /> },
        { path: "admin/transactions/:accountName", element: <Transactions />, errorElement: <Error /> },
        { path: "admin/loans", element: <Loans />, errorElement: <Error /> },
        { path: "admin/loans/:accountName", element: <Loans />, errorElement: <Error /> },
        { path: "admin/debitorders", element: <DebitOrders />, errorElement: <Error /> },
        { path: "admin/debitorders/:accountName", element: <DebitOrders />, errorElement: <Error /> },
      ],
    },
    { path: "/login", element: <Login handleLogin={handleLogin} />, errorElement: <Error /> },
    { path: "/callback", element: <Callback />, errorElement: <Error /> },

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
