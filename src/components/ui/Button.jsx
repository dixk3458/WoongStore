import React from 'react';

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className="bg-lightBrand px-4 py-2 rounded-lg hover:brightness-110 font-bold text-xl"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
