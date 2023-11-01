import React from 'react';
import useProducts from '../hooks/useProducts.jsx';

import ProductCard from './ProductCard';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러...</p>}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products &&
          products.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </ul>
    </>
  );
}
