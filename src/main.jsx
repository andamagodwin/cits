
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';




/**
 * Components
 */
import App from './App.jsx';

import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: (

        <App />

    )
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      
        {/* <App /> */}
        <RouterProvider router={router} />
    
    {/* <App /> */}
  </StrictMode>,
)
