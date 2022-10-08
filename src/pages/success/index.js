import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

function Index() {
  return (
    <div className={styles.card}>
      <div>
        <i>✓</i>
      </div>
      <h1 className={styles.card__header}>Success</h1>
      <p>
        We received your purchase request.
        <br /> We will be in touch shortly!
      </p>

      <button className={styles.card__button}>
        <Link href='/shop'>Continue Shopping</Link>
      </button>
    </div>
  );
}

export default Index;

// text-align: center;
// padding: 40px 0;
// background: #EBF0F5;
