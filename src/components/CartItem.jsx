import React from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiFillMinusSquare } from 'react-icons/ai';
import { addOrUpdateCart, removeCart } from '../api/firebase';
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
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{`옵션: ${option}`}</p>
        <div>
          <p>{`수량: ${quantity}`}</p>
          <div>
            <AiFillMinusSquare onClick={handleMinus} />
            <BsFillPlusSquareFill onClick={handlePlus} />
          </div>
        </div>
        <p>{`₩ ${price}`}</p>
      </div>
      <button onClick={handleDelete}>상품 삭제</button>
    </li>
  );
}
