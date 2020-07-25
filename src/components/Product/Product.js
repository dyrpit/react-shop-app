import React from 'react';

import styles from './Product.module.css';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../reduxData/actions/cartActions';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.Product}>
      <Link to={`/details/${product.id}`}>
        <img className={styles.Image} src={product.image} alt={product.name} />
      </Link>
      <p className={styles.Price}>${product.amount}</p>
      <h3>{product.name}</h3>
      <button className={styles.AddButton} onClick={() => dispatch(addToCart(product))}>
        Add to cart
      </button>
    </div>
  );
};
export default Product;
