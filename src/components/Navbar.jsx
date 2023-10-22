import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <header>
      <Link to={'/'}>
        <img src="/images/logo.png" alt="WoongStore Logo" />
        <h1>WoongStore</h1>
      </Link>
      <nav>
        <Link to={'/products'}>Products</Link>
        <Link to={'/carts'}>Carts</Link>
        <Link to={'/products/new'}>
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
