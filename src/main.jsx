import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import Signed from "./components/container/Signed";

function Main() {
  const [user, setUser] = useState([]);
  const [logged, setLogged] = useState(false);
  const [unlogged, setUnlogged] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App setUser={setUser} setLogged={setLogged} logged={logged}/>,
    },
    {
      path: "/task",
      element: <Signed user={user} setLogged={setLogged}/>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
