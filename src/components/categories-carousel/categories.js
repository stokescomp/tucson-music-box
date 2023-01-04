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
      // height: '500px',
      width: '400px',
      textAlign: 'center',
      background: '#59534A',
      color: '#F8F6F1',
      fontFamily: 'Rubik',
      fontSize: '14px',
      borderRadius: '3px',
      border: 'solid',
      borderWidth: '8px',
      margin: '0px 200px',
      boxSizing: 'border-box',
    };
  }
  static get IMAGE() {
    return {
      width: '385px',
      padding: '0px 0px 0px 0px'
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
          <div style={Categories.CARD_STYLE}><img style={Categories.IMAGE} src='https://static.wixstatic.com/media/bebe38_bdf4bc6147e44183a0de5632552be792~mv2.jpg/v1/crop/x_0,y_23,w_4032,h_2978/fill/w_461,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20201118_115540.jpg'></img>
          <h2>Rocks</h2>
          <p>It's supercalifragilisticexpialidocious
Even though the sound of it
Is something quite atrocious
If you say it loud enough
You'll always sound precocious
Supercalifragilisticexpialidocious
Um-dittle-ittl-um-dittle-I
Um-dittle-ittl-um-dittle-I
Um-dittle-ittl-um-dittle-I
Um-dittle-ittl-um-dittle-I
Because I was afraid to speak
When I was just a lad
Me father gave me nose a tweak
And told me I was bad
But then one day I learned a word
That saved me aching nose
The biggest word you ever heard
And this is how it goes
Oh, supercalifragilisticexpialidocious
Even though the sound of it Is something quite atrocious
If you say it loud enough
You'll always sound precocious
Supercalifragilisticexpialidocious </p>
          </div>
          <div style={Categories.CARD_STYLE}><img style={Categories.IMAGE} src='https://static.wixstatic.com/media/bebe38_0d91ec83100b4fb789530dd0f8cd252a~mv2.jpg/v1/fill/w_459,h_339,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20201119_144815.jpg'/>
          <h2>Crowns</h2>
          <p>It's supercalifragilisticexpialidocious
Even though the sound of it
Is something quite atrocious
If you say it loud enough
You'll always sound precocious
Supercalifragilisticexpialidocious
Um-dittle-ittl-um-dittle-I
Um-dittle-ittl-um-dittle-I
Um-dittle-ittl-um-dittle-I
Um-dittle-ittl-um-dittle-I
Because I was afraid to speak
When I was just a lad
Me father gave me nose a tweak
And told me I was bad
But then one day I learned a word
That saved me aching nose
The biggest word you ever heard
And this is how it goes
Oh, supercalifragilisticexpialidocious
Even though the sound of it</p>
          </div>
          <div style={Categories.CARD_STYLE}><img style={Categories.IMAGE} src='https://static.wixstatic.com/media/bebe38_61a9342e155341cb82356f248fa42ab8~mv2.jpg/v1/crop/x_0,y_858,w_2250,h_1665/fill/w_461,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_1200_edited.jpg'/>
          <h2>Gems</h2>
          <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}
export default Categories;
