import React from 'react';

export default function Navigation({ links }) {
  return (
    <nav>
      <h1>PriorityPulse</h1>
      <div>
        {links.map((link) => link)}
      </div>
    </nav>
  );
}
