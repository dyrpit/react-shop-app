import React from 'react';
import { Link } from 'react-router-dom';

import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../reduxData/actions/cartActions';

import styles from './CartPage.module.css';

const cartModalRoot = document.getElementById('root-modal');

const CartPage = ({ setIsOn }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return createPortal(
    <div className={styles.BackgroundWrapper}>
      <div className={styles.CardWrapper}>
        <a onClick={() => setIsOn(false)} className={styles.CloseButton}>
          X
        </a>
        <h1>Items count: {cart.items.length}</h1>
        {cart.items.map((item, index) => (
          <div key={index} className={styles.ContentWrapper}>
            <img className={styles.CardImage} src={item.image} alt={item.name} />
            <h3 className={styles.CardName}>{item.name}</h3>
            <button
              className={styles.CardButton}
              onClick={() => dispatch(increaseQuantity(item.id))}
            >
              +
            </button>
            <p className={styles.CardText}>
              <strong>${(item.amount * item.quantity).toFixed(2)}</strong>
            </p>
            <button
              className={styles.CardButton}
              onClick={() => dispatch(decreaseQuantity(item.id))}
              disabled={item.quantity <= 0}
            >
              -
            </button>
            <p className={styles.CardText}>
              Quantity:<strong className={styles.CardText}>{item.quantity}</strong>
            </p>
            <button
              className={styles.CardRemoveButton}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove from cart
            </button>
          </div>
        ))}
        <h3>
          TOTAL:
          <span>
            {cart.items.reduce((prev, curr) => {
              return (parseFloat(prev) + parseFloat(curr.amount) * curr.quantity).toFixed(2);
            }, 0)}
          </span>
        </h3>
        {!cart.items.length ? (
          <Link to='/catalog' className={styles.CardAddButton} onClick={() => setIsOn(false)}>
            Add something
          </Link>
        ) : null}
      </div>
    </div>,
    cartModalRoot
  );
};

export default CartPage;
