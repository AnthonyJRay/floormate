import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import RootLayout from "./routes/RootLayout";
import Settings from "./routes/Settings";
import ErrorPage from "./routes/error-page";
import Dashboard from "./routes/Dashboard";
import Estimates from "./routes/Estimates";
import Expenses from "./routes/Expenses";
import Clients from "./routes/Clients";
import Invoices from "./routes/Invoices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "estimates",
        element: <Estimates />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
