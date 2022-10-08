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
      background: '#59534A',
      color: '#F8F6F1',
      fontFamily: 'Poppins',
      fontSize: '20px',
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
          <div style={MyCarousel.CARD_STYLE}><img src=""></img><h2>Gems and Minerals</h2><hr></hr>
          <ul>
            <li>Amethyst</li>
            <li>Opal</li>
            <li>Blue Quartz</li>
            <li>Jade</li>
            <li>Opalite</li>
            <li>Zebra Jasper</li>
            <li>Mangano</li>
            <li>And More</li>
          </ul>
          </div>
          <div style={MyCarousel.CARD_STYLE}><img></img><h2>Fossils and Specimen</h2><hr></hr>
          <ul>
            <li>Double ButterFly</li>
            <li>Shark Teeth</li>
            <li>Shells</li>
            <li>Starfish Fossil</li>
            <li>Ammonite</li>
            <li>Trilobite Fossil</li>
            <li>And More</li>
          </ul>
          </div>
          <div style={MyCarousel.CARD_STYLE}><img></img><h2>Lamps and Trees</h2><hr></hr>
          <ul>
            <li>Salt Lamp</li>
            <li>Opalite Tree</li>
            <li>Selenite Tree</li>
            <li>Gem Tree</li>
            <li>Amethyst Lamp</li>
            <li>And More</li>
          </ul>
          </div>
          <div style={MyCarousel.CARD_STYLE}><img></img><h2>Keepsake Boxes</h2><hr></hr>
          <p>Keep your precious memories safe inside of a special box!</p>
          <ul>
            <li>Dog Shape</li>
            <li>Oval Shape</li>
            <li>And More</li>
          </ul>
          </div>
          <div style={MyCarousel.CARD_STYLE}><img></img><h2>Accessories</h2><hr></hr>
          <ul>
            <li>Crowns</li>
            <li>Necklaces</li>
            <li>Bracelets</li>
            <li>Rings</li>
            <li>Pendants</li>
            <li>Key Chains</li>
          </ul>
          </div>
          <div style={MyCarousel.CARD_STYLE}><img></img><h2>Miscellaneous</h2><hr></hr>
          <ul>
            <li>Sculptures</li>
            <li>Ornate Paperweights</li>
            <li>Figurines</li>
            <li>Soapstone Animals</li>
            <li>And More</li>
          </ul>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}
export default MyCarousel;
