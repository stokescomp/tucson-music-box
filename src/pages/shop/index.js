import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FilterDrawer from "../../components/filterDrawer/filterDrawer";
import Filter from "../../components/filter/filter";
import styles from "./styles.module.css";
import Product from "../../components/product/product";
import { fetchAllProducts } from "../../slices/productsSlice";
import TransitionsModal from "../../components/modal/modal";

function Index() {
  const [screenSize, setScreenSize] = useState(0);
  let products = useSelector(fetchAllProducts);

  useEffect(() => {
    window.addEventListener("load", setScreenSize(window.innerWidth));
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    filterProducts();
  }, []);

  const filterProducts = () => {
    // console.log((products[5] = null));
  };
  return (
    <>
      <h1>Shop</h1>

      <h3>
        Now you can take a peek at our collection from the comfort of your own
        home. Each different piece would make a great new home accent or gift
        for any loved one!
      </h3>
      <div className={styles.modal}>
        <TransitionsModal replace={"Edit Fields"} text="Add new Item" />
      </div>
      <div className={styles.shop__container}>
        {screenSize <= 600 ? (
          <FilterDrawer filter={filterProducts} />
        ) : (
          <Filter filter={filterProducts} />
        )}
        <div className={styles.shop__products}>
          {products.map((product, i) => (
            <Product key={i} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
