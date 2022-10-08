import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

class Categories extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'middle',
    };
  }

  static get CARD_STYLE() {
    return {
      height: '500px',
      width: '400px',
      textAlign: 'center',
      background: '#eee',
      color: '#000',
      fontFamily: 'sans-serif',
      fontSize: '14px',
      textTransform: 'uppercase',
      borderRadius: '3px',
      margin: '0 200px',
      boxSizing: 'border-box',
    };
  }
  static get IMAGE() {
    return {
      width: '400px',
    };
  }

  render() {
    return (
      <div style={Categories.CONTAINER_STYLE}>
        <ReactCardCarousel
          autoplay={false}
          autoplay_speed={2500}
          spread={'wide'}
          disable_box_shadow={true}
        >
          <div style={Categories.CARD_STYLE}><img style={Categories.IMAGE} src='/images/img.png'></img><h2>Rocks</h2></div>
          <div style={Categories.CARD_STYLE}><img style={Categories.IMAGE} src='/images/img.png'/><h2>Crowns</h2></div>
          <div style={Categories.CARD_STYLE}><img style={Categories.IMAGE} src='/images/img.png'/><h2>Gems</h2></div>
        </ReactCardCarousel>
      </div>
    );
  }
}
export default Categories;
