import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import BasicSlider from '../components/hero';
import MyCarousel from '../components/accessories/index.js';
import Categories from '../components/categories-carousel/categories';
import style from './index.module.scss';
import { firestore } from '../../firebase';
import { fetchProducts } from '../slices/productsSlice';

export default function Home() {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      const productsSnapshot = await getDocs(collection(firestore, 'products'));
      const productsList = productsSnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setProducts(productsList);
    };

    getProducts();
  }, []);

  useEffect(() => {
    dispatch(fetchProducts(products));
  });

  return (
    <div className={style.container}>
      <BasicSlider />
      <div>
        <h1 className={style.title}>Categories</h1>
        <p>Rediscover your childhood favorites!</p>
        <p>Book Viking Treasures</p>
        <button><a href='/pages/shop/index.js'>Shop All</a></button>
      </div>
      <Categories />
      <div className={style.accesories}>
        <h1 className={style.title}>Accesories</h1>
        <div>
          <p>
            Gems, minerals, rose quartz, jewelry, and butterfly specimens fill
            our storefront. Now you can take a peek at our collection from the
            comfort of your own home. Each different piece would make a great
            new home accent or gift for any loved one!
          </p>
        </div>
        <button><a href='/pages/shop/index.js'>Shop All</a></button>
      </div>
      <MyCarousel />
      <div className={style.contact}>
        <h1 className={style.title}>Contact Us</h1>
        <h3>Have questions?</h3>
        <p>
          Please reach out! We will respond to you within 2-3 business days.
        </p>
        <button><a href='http://localhost:3000/contact'>Contact Us</a></button>
      </div>
      <br></br>
      <footer />
    </div>
  );
}
