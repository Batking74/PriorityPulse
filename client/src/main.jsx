import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

// Loading Stylesheets
import './Assets/Navigation.css';
import './Assets/HomePage.css';
import './Assets/NameComponents.css';
import './Assets/PriorityStatus.css';
import './Assets/CategoryComponent.css';
import './Assets/DeleteComponents.css';
import './Assets/FormTemplate.css';
import './Assets/Overlay.css';

import CompletedPrioritiesPage from './pages/CompletedPrioritiesPage';
import SignUpPage from './pages/SignupPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'Login',
                element: <LoginPage />,
            },
            {
                path: 'Logout',
                element: <LoginPage />,
            },
            {
                path: 'SignUp',
                element: <SignUpPage />,
            },
            {
                path: 'Home',
                element: <HomePage />,
            },
            {
                path: 'CompletedPriorities',
                element: <CompletedPrioritiesPage />,
            }
        ]
    }
]);


// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);