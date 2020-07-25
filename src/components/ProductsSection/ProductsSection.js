import React from 'react';
import HeaderSmall from '../Header/HeaderSmall';
import ProductsList from '../ProductsList/ProductsList';
import ProductService from '../../services/ProductService';

const ProductsSection = ({ title, category, products }) => {
  const filteredProducts = ProductService.getProductsByFilter(products, {
    category,
    featured: true,
  });

  return (
    <>
      <HeaderSmall>{title}</HeaderSmall>
      <ProductsList products={filteredProducts} />
    </>
  );
};

export default ProductsSection;
