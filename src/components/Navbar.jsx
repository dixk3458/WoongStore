import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { User } from './User';
import Button from './ui/Button';
import { useAuthContext } from '../contexts/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between items-center border-b border-lightBorder">
      <Link to={'/'} className="flex items-center text-4xl text-lightBrand">
        <img
          src="/images/logo.png"
          alt="WoongStore Logo"
          className="w-32 h-32"
        />
        <h1 className="-translate-x-4">WoongStore</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to={'/products'}>Products</Link>
        {user && (
          <Link to={'/carts'}>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to={'/products/new'} className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  );
}
