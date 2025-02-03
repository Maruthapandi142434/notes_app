import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Notes List</Link>
        </li>
        <li>
          <Link to="/new">Create New Note</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
