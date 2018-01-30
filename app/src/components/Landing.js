import React from 'react';
import landingOne from '../assets/landing/1.jpg';
import landingTwo from '../assets/landing/2.jpg';
import landingFive from '../assets/landing/5.jpg';

const Landing = () => {
    return (
      <section style={{ backgroundImage: `url(${landingFive})` }} className="bg-black-10 vh-100 cover bg-center flex items-center justify-center">
          <h1 className="white tc">We build beautiful products. </h1>
      </section>
    )
}

export default Landing;
