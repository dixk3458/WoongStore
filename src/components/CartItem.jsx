import React from 'react';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import { addOrUpdateCart, removeCart } from '../api/firebase';

const ICON_CLASS =
  'trainsition-all cursor-pointer hover:text-red-500 hover:scale-105';

export default function CartItem({
  product,
  product: { title, image, price, id, option, quantity },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateCart(uid, { ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeCart(uid, id);
  };

  return (
    <li className="flex justify-between items-center my-2">
      <img className="w-24 md:w-48" src={image} alt={title} />
      <div className="flex-1 flex justify-between ml-4">
        <div>
          <p className="text-xl">{title}</p>
          <p className="text-xl font-semibold">{`옵션: ${option}`}</p>
          <p className="text-xl">{`수량: ${quantity}`}</p>
          <p className="text-xl">{`₩ ${price}`}</p>
        </div>
        <div className="flex flex-col justify-between text-2xl gap-2">
          <button
            className="underline underline-offset-8 trainsition-all cursor-pointer hover:text-red-500 hover:scale-105"
            onClick={handleDelete}
          >
            상품 삭제
          </button>
          <div className="flex justify-end">
            <AiFillMinusSquare className={ICON_CLASS} onClick={handleMinus} />
            <AiFillPlusSquare className={ICON_CLASS} onClick={handlePlus} />
          </div>
        </div>
      </div>
    </li>
  );
}
