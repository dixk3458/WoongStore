import React from 'react';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../contexts/AuthContext';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { FaEquals } from 'react-icons/fa';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const SHIPPING = 3000;

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => {
      getCart(uid);
    },
  });

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  if (isLoading) return <p>로딩중...</p>;

  return (
    <section>
      {!hasProducts && <p>장바구니가 비었습니다.</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map(product => {
                return (
                  <CartItem key={product.id} product={product} uid={uid} />
                );
              })}
          </ul>
          <PriceCard text="상품 총액" price={totalPrice} />
          <BsFillPlusCircleFill />
          <PriceCard text="배송액" price={SHIPPING} />
          <FaEquals />
          <PriceCard text="총가격" price={totalPrice + SHIPPING} />
        </>
      )}
    </section>
  );
}
