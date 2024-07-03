import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts.jsx";
import Transactions from "./pages/Transactions/Transactions.jsx";
import Loans from "./pages/Loans/Loans.jsx";
import DebitOrders from "./pages/DebitOrders/DebitOrders.jsx";
import Main from "./layouts/Main/Main.jsx";
import Login from "./pages/Login/Login.jsx";
import Unauthenticated from "./pages/Unauthorized/Unauthenticated.jsx";
import Error from "./pages/Error/Error.jsx";
import { LoginLink, LogoutLink } from './components/Authentication/AuthLink.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    
    setIsLoggedIn(true);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Main isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> : <Navigate to="/login" />,
      errorElement: <Error />,
      children: [
        { path: "admin/accounts", element: <Accounts />, errorElement: <Error /> },
        { path: "admin/transactions", element: <Transactions />, errorElement: <Error /> },
        { path: "admin/loans", element: <Loans />, errorElement: <Error /> },
        { path: "admin/debitorders", element: <DebitOrders />, errorElement: <Error /> }
      ],
    },
    { path: "/login", element: <Login handleLogin={handleLogin} />, errorElement: <Error /> },
    { path: "/unauthorized", element: <Unauthenticated />, errorElement: <Error /> }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
