import React from 'react';
import { Button } from '../Button';

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
          <Button btnType="light" type="button">
            Sign In
          </Button>
        </li>
        <li>
          <Button btnType="bright" type="button">
            Sign Up
          </Button>
        </li>
      </ul>
      <input type="checkbox" />
    </nav>
  );
};

export default Navigation;
