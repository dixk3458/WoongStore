import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { addOrUpdateCart } from '../api/firebase';

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, image, title, category, price, description, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);

  const handleSubmit = e => {
    e.preventDefault();
    // 클릭이 되었을때 아이템을 추가 or 업데이트
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateCart(uid, product);
  };

  const handleChange = e => {
    setSelected(e.target.value);
  };

  return (
    <section className="flex flex-col items-center md:flex-row">
      <img src={image} alt={title} className="w-1/2" />
      <form
        onSubmit={handleSubmit}
        className="w-1/2 flex flex-col justify-center gap-4  p-8"
      >
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-3xl text-gray-500">{`₩ ${price}`}</p>
        <p className="text-2xl text-gray-500">{category}</p>
        <div>
          {options.map((option, index) => {
            return (
              <label key={index} className="text-xl mr-4">
                <input
                  type="radio"
                  name="options"
                  value={option}
                  onChange={handleChange}
                  checked={option === selected}
                  className="w-4 h-4 mr-2"
                />
                <span>{option}</span>
              </label>
            );
          })}
        </div>
        <p className="text-xl text-gray-500">{description}</p>
        <button className="text-xl bg-lightBrand font-bold py-4 hover:brightness-110">
          장바구니에 추가하기
        </button>
      </form>
    </section>
  );
}
