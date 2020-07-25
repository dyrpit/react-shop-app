import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from './services/fetchProducts';

import AboutPage from './pages/AboutPage/AboutPage';
import CartPage from './pages/CartPage/CartPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import Container from './components/Container/Container';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Nav from './components/Nav/Nav';

const App = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <Nav setIsOn={setIsOn} />
      <Container>
        <Route
          exact
          path='/'
          component={() => (
            <HomePage
              products={products.products}
              pending={products.pending}
              error={products.error}
            />
          )}
        />
        <Route
          path='/catalog'
          component={() => (
            <CatalogPage
              products={products.products}
              pending={products.pending}
              error={products.error}
            />
          )}
        />
        <Route path='/about' component={AboutPage} />
        <Route path='/details/:productId' component={DetailsPage} />
        {isOn && <CartPage setIsOn={setIsOn} />}
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
