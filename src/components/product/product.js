
import Image from 'next/image';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Product(props) {
  return (
    <div className={styles.product}>

      <img src='/images/default.jpg' alt='Default' />

      <div className={styles.product__info}>
        <h4>Blue Gem</h4>
        <span>$40</span>
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  );
}

export default Product;
