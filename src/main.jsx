import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

import RootLayout from './routes/RootLayout'
import ErrorPage from "./error-page"
import Dashboard from './pages/Dashboard'
import Estimates from './pages/Estimates'
import Expenses from './pages/Expenses'
import Clients from './pages/Clients'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "estimates",
        element: <Estimates />
      },
      {
        path: "expenses",
        element: <Expenses />
      },
      {
        path: "clients",
        element: <Clients />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
