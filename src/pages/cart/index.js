import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct';

import { selectProducts, selectSubtotal } from '../../slices/basketSlice';
import styles from './styles.module.css';

function Index() {
  const products = useSelector(selectProducts);
  const subtotal = useSelector(selectSubtotal);

  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>

      <div className={styles.cart__container}>
        <div className={styles.cart__product}>
          {products.map((product, i) => (
            <CheckoutProduct key={i} {...product} />
          ))}
        </div>

        <div className={styles.cart__summary}>
          <h2>Order Summary</h2>

          <div>
            <h3>Subtotal</h3>

            <span>${subtotal}</span>
          </div>

          <div>
            <h3>Shipping</h3>

            <span>Pending</span>
          </div>

          <hr />

          <div>
            <h3>Total</h3>

            <span>Pending</span>
          </div>

          <button role='link' className={styles.cart__btn}>
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
