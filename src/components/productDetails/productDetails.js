import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Button, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);

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

    try {
      dispatch(addToBasket(product));
      setOpenSuccess(true);
    } catch (error) {
      setOpenFailure(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenFailure(false);
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

      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Successfully added to cart!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openFailure}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          Something went wrong. Please try again
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductDetails;
