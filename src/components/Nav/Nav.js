import React from 'react';
import Container from '../Container/Container';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Nav = ({ setIsOn }) => {
  const { items } = useSelector((state) => state.cart);
  return (
    <nav className={style.Navbar}>
      <Container>
        <ul className={style.Nav}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/catalog'>Catalog</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li className={style.ShoppingCart}>
            <Link to='/' onClick={() => setIsOn(true)}>
              <i className='fas fa-shopping-cart'>
                <span className={style.ShoppingCart}>
                  {items.reduce((prev, curr) => prev + curr.quantity, 0)}
                </span>
              </i>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
