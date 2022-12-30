import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import FilterDrawer from '../../components/filterDrawer/filterDrawer';
import { firestore } from '../../../firebase';
import Filter from '../../components/filter/filter';
import styles from './styles.module.css';
import Product from '../../components/product/product';
import { fetchProducts } from '../../slices/productsSlice';
import TransitionsModalEdit from '../../components/modal/modalEdit';
import { useDispatch } from 'react-redux';

function Index() {
  const [screenSize, setScreenSize] = useState(0);
  
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("load", setScreenSize(window.innerWidth));
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    filterProducts();

    getProducts();
  }, []);

  const getProducts = async () => {
    const productsSnapshot = await getDocs(collection(firestore, 'products'));
    const productsList = productsSnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  
    setProducts(productsList);
  };
  
  const [products, setProducts] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts(products));
  });

  const filterProducts = () => {
    // console.log((products[5] = null));
  };
  
  const displayProducts = () => {
    console.log('check products', products)
    if(typeof(products) !== 'undefined' && products !== null){
        products.map((product, i) => console.log("eachProd", i, product));
        return products.map((product, i) => (
          <Product key={i} {...product} />
        ))

    }
  };

  return (
    <>
      <h1>Shop</h1>
      <br/>
      <h3>
        Now you can take a peek at our collection from the comfort of your own
        home. Each different piece would make a great new home accent or gift
        for any loved one!
      </h3>
      <div className={styles.modal}>
        <TransitionsModalEdit replace={"Add New Item"} text="Add New Item" />
      </div>
      <div className={styles.shop__container}>
        {screenSize <= 600 ? (
          <FilterDrawer filter={filterProducts} />
        ) : (
          <Filter filter={filterProducts} />
        )}
        <div className={styles.shop__products}>
          {displayProducts()}
        </div>
      </div>
    </>
  );
}

export default Index;
