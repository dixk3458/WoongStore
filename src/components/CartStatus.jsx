import React from 'react';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../contexts/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });
  return (
    <div className="relative">
      <PiShoppingCartSimpleBold className="text-4xl" />
      <p className="absolute w-5 h-5 text-center font-bold -top-1 -right-1 bg-lightBrand rounded-full ">
        {products && products.length}
      </p>
    </div>
  );
}
