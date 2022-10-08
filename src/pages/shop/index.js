import React, { useEffect, useState } from 'react';

import FilterDrawer from '../../components/filterDrawer/filterDrawer';
import styles from './styles.module.css';

function Index() {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize(window.innerWidth));
  });

  return (
    <>
      <h1>Shop</h1>

      <h3>
        Now you can take a peek at our collection from the comfort of your own
        home. Each different piece would make a great new home accent or gift
        for any loved one!
      </h3>

      <div>
        {screenSize <= 600 && <FilterDrawer />}
        <div className={styles.shop__container}>
          <p>Product</p>
          <p>Product</p>
          <p>Product</p>
          <p>Product</p>
          <p>Product</p>
          <p>Product</p>
        </div>
      </div>
    </>
  );
}

export default Index;
