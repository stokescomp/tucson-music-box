import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Product(props) {
  return (
    <div className={styles.product}>
      <Link href={`/shop/detail/${props.id}`}>
        <Image
          src="/images/default.jpg"
          alt="Default"
          width={250}
          height={250}
          objectFit="cover"
        />
      </Link>
    </div>
  );
}

export default Product;
