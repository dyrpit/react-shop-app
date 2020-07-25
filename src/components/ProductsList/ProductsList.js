import React from 'react';
import style from './ProductsList.module.css';
import Product from '../Product/Product';

const ProductsList = ({ products }) => (
  <div className={style.Products}>
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

export default ProductsList;
