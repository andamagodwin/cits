
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LecturesPage from './pages/dashboard/lecturesPage.jsx';
import SchedulePage from './pages/dashboard/schedulePage.jsx';
import LoginPage from './pages/auth/loginPage.jsx';
import AuthError from './pages/error/authError.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {AuthProvider} from './context/authContext.jsx';



/**
 * Components
 */
import App from './App.jsx';

import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
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
    element: (
      <AuthProvider>
        
        <LoginPage />
      </AuthProvider>
    ),
  },
  {
    path: "/auth-error",
    element: (
      <AuthProvider>
        <AuthError />
      </AuthProvider>
    ),
  }
]);

const CLIENT_ID = "275545075771-fddi7eh53isj09v22g39403e89sf9oa5.apps.googleusercontent.com"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider 
      clientId={CLIENT_ID}

    >
      
        {/* <App /> */}
        <RouterProvider router={router} />
      

    </GoogleOAuthProvider>
    {/* <App /> */}
  </StrictMode>,
)
