import { Outlet } from 'react-router-dom';
import Navigation from './components/Nav';
import React from 'react';

export default function App() {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
}