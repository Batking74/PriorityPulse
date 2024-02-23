import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import React from 'react';


export default function Navigation() {
  return (
    <Navbar
      links={[
        <Link key={1} to="/Home">Home</Link>,
        <Link key={2} to="/CompletedPriorities">Completed Priorities</Link>,
        <Link key={3} to="/Logout">Logout</Link>
      ]}
    />
  );
}
