import Image from "next/image";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

import styles from "./styles.module.css";
import TransitionsModal from "../modal/modal";
import { Edit } from "@mui/icons-material";
function Product({
  category,
  color,
  description,
  discount,
  imgUrl,
  name,
  price,
  quantity,
  id,
}) {
  // const [edit, onEdit] = useState();
  // const [del, onDelete] = useState();

  const edit = () => {};
  return (
    <div className={styles.product}>
      <Link href={`shop/details/${id}`}>
        <img src={imgUrl} alt={name} />
      </Link>
      <div className={styles.product__info}>
        <h4 className={styles.product__name}>{name}</h4>
        <span>${price}</span>
        <TransitionsModal
          replace={"Edit Fields"}
          name={name}
          description={description}
          imgUrl={imgUrl}
          category={category}
          discount={discount}
          quantity={quantity}
          color={color}
          className={styles.modal}
          text="edit"
        />

        <DeleteIcon className={styles.product__delete} />
      </div>
    </div>
  );
}

export default Product;
