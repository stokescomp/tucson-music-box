import Index from "../components/categories-carousel";
import MyCarousel from "../components/accesories/index.js"

export default function Home() {
  return (
    <div>
      <div>
        <h1>Categories</h1>
        <span>Rediscover your childhood</span>
        <span>Book Viking Treasures</span>
        <button>Shop All</button>
      </div>
      <Index />
        <div>
          <h1>Accesories</h1>
          <div>
            <p>Gems, minerals, rose quartz, jewelry, 
            and butterfly specimens fill our storefront. 
            Now you can take a peek at our collection from 
            the comfort of your own home. Each different piece 
            would make a great new home accent or gift for any 
            loved one!</p>
          </div>
        </div>
      <MyCarousel />
    </div>
  );
}
