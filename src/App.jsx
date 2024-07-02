import { createBrowserRouter, RouterProvider, Route, Link, Outlet, createRoutesFromElements } from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts.jsx"
import Transactions from "./pages/Transactions/Transactions.jsx"
import Loans from "./pages/Loans/Loans.jsx"
import DebitOrders from "./pages/DebitOrders/DebitOrders.jsx"

import Main from "./layouts/Main/Main.jsx";
import Login from "./pages/Login/Login.jsx";
//import SignUp from "./pages/SignUp /SignUp.jsx";
//import Error from "./pages/Error/Error.jsx";
//import Confirmation from "./pages/Confirmation/Confirmation.jsx";
//import MFA from "./pages/MFA/MFA.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "admin/accounts",
        element: <Accounts />,
        errorElement: <Error />,
      },
      {
        path: "admin/transactions",
        element: <Transactions />,
        errorElement: <Error />,
      },
      {
        path: "admin/transactions/:accountName",
        element: <Transactions />,
        errorElement: <Error />,
      },
      {
        path: "admin/loans",
        element: <Loans />,
        errorElement: <Error />,
      },
      {
        path: "admin/loans/:accountName",
        element: <Loans />,
        errorElement: <Error />,
      },
      {
        path: "admin/debitorders",
        element: <DebitOrders />,
        errorElement: <Error />,
      },
      {
        path: "admin/debitOrders/:accountName",
        element: <DebitOrders />,
        errorElement: <Error />,
      },
      {
        path: "admin/login",
        element: <Login />,
        errorElement: <Error />,
      },
    ],
  },
  /*{
    path: "admin/mfa",
    index: true,
    element: <MFA />,
  },

  {
    path: "admin/confirmation",
    index: true,
    element: <Confirmation />,
  },
  {
    path: "admin/signup",
    index: true,
    element: <SignUp />,
  },*/
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
