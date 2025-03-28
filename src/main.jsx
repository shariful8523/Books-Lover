import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componet/Root/Root';
import Home from './Componet/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
