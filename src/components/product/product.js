import Link from "next/link";
import styles from "./styles.module.css";
import TransitionsModalEdit from "../modal/modalEdit";
import TransitionsModalDelete from "../modal/modalDelete";
function Product({
  category,
  color,
  description,
  discount,
  imgUrl,
  name,
  price,
  quantity,
  id
}) {
  // console.log("details", category,
  // color,
  // description,
  // discount,
  // imgUrl,
  // name,
  // price,
  // quantity,
  // id)

  return (
    <div className={styles.product}>
      <Link href={`shop/details/${id}`}>
        <img src={imgUrl} alt={name} />
      </Link>
      <div className={styles.product__info}>
        <h4 className={styles.product__name}>{name}</h4>
        <span>${price}</span>
        <TransitionsModalEdit
          replace={"Edit Fields"}
          imgUrl={imgUrl}
          name={name}
          description={description}
          category={category}
          discount={discount}
          quantity={quantity}
          color={color}
          className={styles.modal}
          text="edit"
          price={price}
          id={id}
        />
        <TransitionsModalDelete
          replace={name}
          id={id}
        />
      </div>
    </div>
  );
}

export default Product;
