import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from '../../components/Product/Product';

const DetailsPage = () => {
  const { productId } = useParams();

  const product = useSelector((state) =>
    state.products.products.find((item) => item.id === productId)
  );

  if (!product) {
    return <Redirect to='/' />;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Product product={product} />
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h2>Description</h2>
        <p>{product.description || 'No description yet...'}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
