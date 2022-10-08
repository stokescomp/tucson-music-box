import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles.module.css';
import { addToBasket } from '../../slices/basketSlice';

function ProductDetails({
  name,
  description,
  price,
  category,
  discount,
  imgUrl,
  id,
}) {
  const dispatch = useDispatch();

  const addToCart = () => {
    const product = {
      name,
      description,
      price,
      category,
      discount,
      imgUrl,
      id,
    };

    console.log(product);
    dispatch(addToBasket(product));
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetails__imgContainer}>
        <img src={imgUrl} alt={name} />
      </div>

      <div className={styles.productDetails__info}>
        <h1>{name}</h1>
        <span>${price}</span>
        <p>{description}</p>

        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
