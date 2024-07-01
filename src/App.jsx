import { createBrowserRouter, RouterProvider, Route, Link, Outlet, createRoutesFromElements } from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts.jsx"
import Transactions from "./pages/Transactions/Transactions.jsx"
import Loans from "./pages/Loans/Loans.jsx"
import DebitOrders from "./pages/DebitOrders/DebitOrders.jsx"

import Main from "./layouts/Main/Main.jsx";
import Error from "./pages/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "accounts",
        element: <Accounts />,
        errorElement: <Error />,
      },
      {
        path: "transactions",
        element: <Transactions />,
        errorElement: <Error />,
      },
      {
        path: "loans",
        element: <Loans />,
        errorElement: <Error />,
      },
      {
        path: "debitorders",
        element: <DebitOrders />,
        errorElement: <Error />,
      },
    ],
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
