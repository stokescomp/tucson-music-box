import * as React from "react";
import layout from '../layout.js'
import Index from "./index.js";




export default function categoriescarousel() {
    return (
      <>
        <div className={categoriesCarousel.title}>
            <h1>Categories</h1>
            <span>Rediscover your childhood</span>
            <span>Book Viking Treasures</span>
            <button>Shop All</button>
        </div>
        <div className={categoriesCarousel.container}>
            <div className={cateoriesCarousel.card}>
                <img src=""></img>
                <h2>Gems</h2>
            </div>
            <div className={cateoriesCarousel.card}>
                <img src=""></img>
                <h2>Crowns</h2>
            </div>
            <div className={cateoriesCarousel.card}>
                <img src=""></img>
                <h2>Rocks</h2>
            </div>
        </div>
      </>
    );
  }