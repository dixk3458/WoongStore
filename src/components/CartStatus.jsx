import React from 'react';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import useCart from '../hooks/useCart.jsx';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className="relative">
      <PiShoppingCartSimpleBold className="text-4xl" />
      <p className="absolute w-5 h-5 text-center font-bold -top-1 -right-1 bg-lightBrand rounded-full ">
        {products && products.length}
      </p>
    </div>
  );
}
