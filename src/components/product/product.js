import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';

function Product() {
  return (
    <div className={styles.product}>
      <Image
        src='/images/default.jpg'
        alt='Default'
        width={250}
        height={250}
        objectFit='cover'
      />
    </div>
  );
}

export default Product;
