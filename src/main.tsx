import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router";
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <App/>},
      { path: "*", element: <Navigate to="/" replace /> }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
