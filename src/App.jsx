import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./layouts/Main/Main.jsx";
import Error from "./pages/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />
  },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
