import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  }

  static get CARD_STYLE() {
    return {

      height: '550px',
      width: '350px',
      paddingTop: '80px',
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

  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel
          autoplay={false}
          autoplay_speed={2500}
          spread={"wide"}
          disable_box_shadow={true}
        >
          <div style={MyCarousel.CARD_STYLE}><img></img><h2></h2></div>
          <div style={MyCarousel.CARD_STYLE}><img></img><h2></h2></div>
          <div style={MyCarousel.CARD_STYLE}><img></img><h2></h2></div>
          <div style={MyCarousel.CARD_STYLE}><img></img><h2></h2></div>
          <div style={MyCarousel.CARD_STYLE}><img></img><h2></h2></div>
        </ReactCardCarousel>
      </div>
    );
  }
}
export default MyCarousel;
