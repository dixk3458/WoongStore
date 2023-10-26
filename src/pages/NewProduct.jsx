import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';


export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files[0]);
      return;
    }
    setProduct(product => ({ ...product, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    uploadImage(file).then(url => {
      addNewProduct(product, url);
    });
  };
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="local file"></img>}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ''}
          onChange={handleChange}
          placeholder="제품명"
          required
        />
        <input
          type="text"
          name="price"
          value={product.price ?? ''}
          onChange={handleChange}
          placeholder="가격"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          onChange={handleChange}
          placeholder="카테고리"
          required
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ''}
          onChange={handleChange}
          placeholder="상세설명"
          required
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ''}
          onChange={handleChange}
          placeholder="옵션(콤마(,)로 구분)"
          required
        />
        <Button text={'제품 등록하기'} />
      </form>
    </section>
  );
}
