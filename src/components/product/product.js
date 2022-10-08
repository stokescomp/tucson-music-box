
import Image from 'next/image';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';



function Product({
  category,
  color,
  description,
  discount,
  imgUrl,
  name,
  price,
  quantity,
}) {
  return (
    <Link href={`shop/${name}`}>
      <div className={styles.product}>
        <img src={imgUrl} alt={name} />

        <div className={styles.product__info}>
          <h4 className={styles.product__name}>{name}</h4>
          <span>${price}</span>
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
    </Link>
  );
}

export default Product;
