import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles.module.css';
import { removeFromBasket } from '../../slices/basketSlice';
import { Alert, Snackbar } from '@mui/material';

function CheckoutProduct({
  name,
  description,
  price,
  category,
  discount,
  imgUrl,
  id,
}) {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    try {
      dispatch(removeFromBasket({ id }));
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
    <div className={styles.checkoutProduct}>
      <div className={styles.checkoutProduct__img}>
        <img src={imgUrl} alt={name} />
      </div>

      <div className={styles.checkoutProduct__info}>
        <h3>{name}</h3>
        <span className={styles.checkoutProduct__quantity}>Quantity: 1</span>
        <p className={styles.checkoutProduct__price}>${price}</p>
        <span
          onClick={removeItemFromBasket}
          className={styles.checkoutProduct__remove}
        >
          Remove
        </span>
      </div>

      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Item was removed from cart
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

export default CheckoutProduct;
