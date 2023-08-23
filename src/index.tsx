import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { client } from "./services/apollo";
import AuthProvider from "./context/AuthProvider";
import Register from "./pages/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/registro",
        element: <Register />,
      },
      {
        path: "/inicio",
        element: <ProtectedRoute element={<Home />} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
