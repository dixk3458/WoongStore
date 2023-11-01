import React from 'react';

export default function Banner({ text, image }) {
  return (
    <section className="h-96 bg-lightBrand ">
      <div
        className={`flex justify-center items-center w-full h-full bg-${image} opacity-80 bg-cover`}
      >
        <h1 className="text-5xl text-white">{text}</h1>
      </div>
    </section>
  );
}
