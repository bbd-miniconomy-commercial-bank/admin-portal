import { createBrowserRouter, RouterProvider, Route, Link, Outlet, createRoutesFromElements } from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts.jsx"
import Transactions from "./pages/Transactions/Transactions.jsx"
import Loans from "./pages/Loans/Loans.jsx"
import DebitOrders from "./pages/DebitOrders/DebitOrders.jsx"

import Main from "./layouts/Main/Main.jsx";
import Login from "./pages/Login/Login.jsx";
import Unauthenticated from "./pages/Unauthorized/Unauthenticated.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
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
      }
    ],
  },
  {
    path: "/unauthorized",
    index: true,
    element: <Unauthenticated />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
