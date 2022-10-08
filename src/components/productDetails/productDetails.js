import React from 'react';

import styles from './styles.module.css';

function ProductDetails({
  name,
  description,
  price,
  category,
  discount,
  imgUrl,
  id,
}) {
  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetails__imgContainer}>
        <img src={imgUrl} alt={name} />
      </div>

      <div className={styles.productDetails__info}>
        <h1>{name}</h1>
        <span>${price}</span>
        <p>{description}</p>

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
