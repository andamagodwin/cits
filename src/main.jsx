
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LecturesPage from './pages/dashboard/lecturesPage.jsx';
import SchedulePage from './pages/dashboard/schedulePage.jsx';
import LoginPage from './pages/auth/loginPage.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';



/**
 * Components
 */
import App from './App.jsx';

import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/lectures",
        element: <LecturesPage />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const CLIENT_ID = "275545075771-fddi7eh53isj09v22g39403e89sf9oa5.apps.googleusercontent.com"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>

      <RouterProvider router={router} />

    </GoogleOAuthProvider>
    {/* <App /> */}
  </StrictMode>,
)
