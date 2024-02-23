import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

// Loading Stylesheets
import './Assets/Navigation.css';
import './Assets/HomePage.css';
import './Assets/CategoryComponent.css';
import './Assets/DeleteComponents.css';
import './Assets/PriorityStatus.css';
import './Assets/Login.css';

import CompletedPrioritiesPage from './pages/CompletedPrioritiesPage';
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
                element: <LoginPage />,
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