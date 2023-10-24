import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button className="bg-lightBrand px-4 py-2 rounded-lg hover:brightness-110" onClick={onClick}>
      {text}
    </button>
  );
}
