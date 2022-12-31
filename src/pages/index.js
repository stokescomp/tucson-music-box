import BasicSlider from '../components/hero';
import MyCarousel from '../components/accessories/index.js';
import Categories from '../components/categories-carousel/categories';
import style from './index.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={style.container}>
      <BasicSlider />
      <div>
        <h1 className={style.title}>Categories</h1>
        <p>Rediscover your childhood favorites!</p>
        <p>Book Viking Treasures</p>
        <button className={style.button}>
        <Link href='/shop' className={style.a}>Shop</Link>
        </button>
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
        <button className={style.button}>
        <Link href='/shop' className={style.a}>Shop All</Link>
        </button>
      </div>
      <MyCarousel />
      <div className={style.contact}>
        <h1 className={style.title}>Contact Us</h1>
        <h3>Have questions?</h3>
        <p>
          Please reach out! We will respond to you within 2-3 business days.
        </p>

        <button className={style.button}>
        <Link href='/contact' className={style.a}>Contact Us</Link>
        </button>
      </div>
      <br></br>
      <footer />
    </div>
  );
}
