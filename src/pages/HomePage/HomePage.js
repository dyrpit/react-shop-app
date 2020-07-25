import React from 'react';

import Container from '../../components/Container/Container';
import HeaderBig from '../../components/Header/HeaderBig';
import Loading from '../../components/Loading/Loading';
import ProductsSection from '../../components/ProductsSection/ProductsSection';

const HomePage = ({ products, pending, error }) => {
  return (
    <Container>
      {error ? (
        <h1>ERROR</h1>
      ) : (
        <>
          <HeaderBig>Welcome to our store</HeaderBig>
          {pending ? (
            <Loading />
          ) : (
            <>
              <ProductsSection title='Desktops' category='desktop' products={products} />
              <ProductsSection title='Tablets' category='tablet' products={products} />
            </>
          )}
        </>
      )}
    </Container>
  );
};
export default HomePage;
