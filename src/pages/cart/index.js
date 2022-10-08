import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct';

import { selectProducts, selectSubtotal } from '../../slices/basketSlice';
import styles from './styles.module.css';
import getStripe from '../../utils/get-stripe';

// const stripePromise = loadStripe(
//   'pk_test_51LqfmgCfP4oUHfkQ6SBrtpa0O1bCxECf7JcBkFMQwUXZcSjLNjuHHfJw21ViJ02LTaS4NrrS28GMJO9eTm2yqlYc007jxKfBbJ'
// );

async function fetchPostJSON(url, data) {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
}

function Index() {
  const products = useSelector(selectProducts);
  const subtotal = useSelector(selectSubtotal);

  const createCheckoutSession = async (e) => {
    e.preventDefault();

    const checkoutSession = await fetchPostJSON('/api/checkout_sessions', {
      amount: 1000,
    });

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    console.warn(error.message);
  };

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

          <button
            onClick={createCheckoutSession}
            role='link'
            className={styles.cart__btn}
          >
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
