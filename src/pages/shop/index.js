import React, { useEffect, useState } from 'react';

import FilterDrawer from '../../components/filterDrawer/filterDrawer';
import Filter from '../../components/filter/filter';
import styles from './styles.module.css';
import Product from '../../components/product/product';

function Index() {
  const [screenSize, setScreenSize] = useState(0);
  console.log(screenSize);

  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize(window.innerWidth));
    // setScreenSize(window.innerWidth);
  }, []);

  return (
    <>
      <h1>Shop</h1>

      <h3>
        Now you can take a peek at our collection from the comfort of your own
        home. Each different piece would make a great new home accent or gift
        for any loved one!
      </h3>

      <div className={styles.shop__container}>
        {screenSize <= 600 ? <FilterDrawer /> : <Filter />}
        <div className={styles.shop__products}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}

export default Index;
