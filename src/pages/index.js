

import BasicSlider from '../components/hero';
import MyCarousel from '../components/accesories/index.js';
import Categories from '../components/categories-carousel/categories';
import style from './index.module.sass'


export default function Home() {
  return (
    <div>
      <BasicSlider />
      <div>
        <h1 className={style.title}>Categories</h1>
        <span>Rediscover your childhood</span>
        <span>Book Viking Treasures</span>
        <button>Shop All</button>
      </div>
      <Categories/>
      <div>
        <h1 className={style.title}>Accesories</h1>
        <div>
          <p>
            Gems, minerals, rose quartz, jewelry, and butterfly specimens fill
            our storefront. Now you can take a peek at our collection from the
            comfort of your own home. Each different piece would make a great
            new home accent or gift for any loved one!
          </p>
        </div>
      </div>
      <MyCarousel />
      <div>
        <h1 className={style.title}>Contact Us</h1>
      </div>
    </div>
  );
}
