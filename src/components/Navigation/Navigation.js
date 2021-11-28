import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Customers</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Resources</a>
        </li>
      </ul>
      <ul>
        <li>
          <button type="button">Sign In</button>
        </li>
        <li>
          <button type="button">Sign Up</button>
        </li>
      </ul>
      <input type="checkbox" />
    </nav>
  );
};

export default Navigation;
