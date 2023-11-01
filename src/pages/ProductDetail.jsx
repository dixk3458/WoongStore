import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const [success, setSuccess] = useState();
  const {
    state: {
      product: { id, image, title, category, price, description, options },
    },
  } = useLocation();

  const { addOrUpdateItem } = useCart();

  const [selected, setSelected] = useState(options && options[0]);

  const handleSubmit = e => {
    e.preventDefault();
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('상품이 추가되었습니다.✅');
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      },
    });
  };

  const handleChange = e => {
    setSelected(e.target.value);
  };

  return (
    <section className="flex flex-col items-center md:flex-row">
      <img src={image} alt={title} className="w-4/5 md:w-1/2" />
      <form
        onSubmit={handleSubmit}
        className="w-full text-sm  flex flex-col justify-center gap-2 p-8 md:gap-4  md:w-1/2 "
      >
        <h1 className="text-lg font-boldmd:text-4xl ">{title}</h1>
        <p className="text-lg text-gray-500 md:text-3xl ">{`₩ ${price}`}</p>
        <p className="text-lg text-gray-500">{category}</p>
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
        <p className="text-lg text-gray-500 md:text-xl ">{description}</p>
        <button
          className={`bg-lightBrand text-lg font-bold py-4 hover:brightness-110 md:text-xl `}
        >
          장바구니에 추가하기
        </button>
        {success && <p className="my-2 text-center text-lg">{success}</p>}
      </form>
    </section>
  );
}
