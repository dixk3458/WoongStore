import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center border-b border-lightBorder">
      <Link to={'/'} className="flex items-center text-4xl text-lightBrand">
        <img src="/images/logo.png" alt="WoongStore Logo" className='w-32 h-32' />
        <h1 className='-translate-x-4' >WoongStore</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to={'/products'}>Products</Link>
        <Link to={'/carts'}>Carts</Link>
        <Link to={'/products/new'} className="text-2xl">
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
