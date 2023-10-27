import React from 'react';

export default function ProductCard({
  product: { id, image, title, category, price, description },
}) {
  return (
    <li className="relative rounded-lg shadow-md overflow-hidden cursor-pointer">
      <img src={image} alt={title} className="w-full" />
      <div className="flex justify-between mt-2 p-2 text-lg">
        <h3>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <div className="absolute top-0 w-full h-full opacity-0 bg-black text-white text-xl flex justify-center items-center p-8 transition-all duration-300 ease-in  hover:opacity-80 ">
        <p className="line-clamp-4">{description}</p>
      </div>
    </li>
  );
}
