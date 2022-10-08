import React, { useEffect, useState } from 'react';

import styles from '../../styles/filterDrawer.module.css';
import FilterDrawer from '../../components/filterDrawer';

function Index() {
  const [screenSize, setScreenSize] = useState(0);
  console.log(screenSize);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  });

  return (
    <>
      <h1>Shop</h1>

      <h3>
        Now you can take a peek at our collection from the comfort of your own
        home. Each different piece would make a great new home accent or gift
        for any loved one!
      </h3>

      <div></div>
    </>
  );
}

export default Index;
