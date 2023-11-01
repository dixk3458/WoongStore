import React from 'react';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { FaEquals } from 'react-icons/fa';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  if (isLoading) return <p>로딩중...</p>;

  return (
    <div>
      <div className="bg-menuBanner flex justify-center items-center w-full h-96 opacity-80  bg-cover">
        <h1 className="text-5xl text-lightBrand">My Cart</h1>
      </div>
      <section className="p-8 flex flex-col">
        {!hasProducts && (
          <p className="text-center text-2xl mb-4">장바구니가 비었습니다.</p>
        )}
        {hasProducts && (
          <>
            <ul className="border-b border-gray-300 mb-8 p-4 px-8">
              {products &&
                products.map(product => {
                  return <CartItem key={product.id} product={product} />;
                })}
            </ul>
            <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16">
              <PriceCard text="상품 총액" price={totalPrice} />
              <BsFillPlusCircleFill className="shrink-0" />
              <PriceCard text="배송액" price={SHIPPING} />
              <FaEquals className="shrink-0" />
              <PriceCard text="총가격" price={totalPrice + SHIPPING} />
            </div>
          </>
        )}
        <Button text="주문하기" />
      </section>
    </div>
  );
}
