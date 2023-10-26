import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [success, setSuccess] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    uploadImage(file)
      .then(url => {
        addNewProduct(product, url).then(() => {
          setSuccess('✨새로운 제품을 등록했습니다.✨');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .finally(() => {
        setIsLoading(false);
        setProduct({});
        setFile();
      });
  };
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold my-4 mt-12">제품 등록</h2>
      <section className="flex items-center">
        <div className="flex items-center justify-center w-1/2 h-96 border-r border-gray-300">
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="local file"
              className="w-96 h-96 "
            />
          ) : (
            <p className="text-2xl font-bold">이미지를 등록해주세요</p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex  flex-col  w-1/2 p-4 ">
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
          <Button
            text={isLoading ? '로딩중...' : '제품 등록하기'}
            disabled={isLoading}
          />
        </form>
      </section>
      {success && <p className="mt-8 text-4xl font-semibold">{success}</p>}
    </div>
  );
}
