import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componet/Root/Root';
import Home from './Componet/Home/Home';
import BooksDetails from './Componet/Home/BooksDetails';
import BookList from './Componet/Home/BookList';


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
        path: '/books/:bookId',
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "/ListBook",
        element: <BookList></BookList>,
      },
      {
        path: "/PagetoRead",
        element: <h1>hello</h1>
      }
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
