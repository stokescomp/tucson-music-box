import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct';

import { selectProducts } from '../../slices/basketSlice';
import styles from './styles.module.css';

function Index() {
  const products = useSelector(selectProducts);
  console.log(products);

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

            <span>$40</span>
          </div>

          <div>
            <h3>Shipping</h3>

            <span>Calculated at the next step</span>
          </div>

          <hr />

          <div>
            <h3>Total</h3>

            <span>Pending</span>
          </div>

          <button className={styles.cart__btn}>Continue to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Index;
