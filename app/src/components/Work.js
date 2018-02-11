import React from 'react';

import Card from './Card';

import quodl from '../assets/quodl/quodl-mobile.png';
import exploratory from '../assets/exploratory/be-mobile.png';
import berkeley from '../assets/berkeley/berkeley-mobile.png';

const Work = () => {
  return (
    <section className="ph4 ph6-m ph7-l pv5 tc">
      <h3>Our Work</h3>
      <div className="flex-ns flex-wrap justify-between-ns">
        <Card
          width="w-100 w-45-ns w-30-xl"
          image={ quodl }
          client="Quodl"
          blurb="A real-time quiz app to increase in-lecture engagement and support learning"
          link="quodl"
        />
        <Card
          width="w-100 w-45-ns w-30-xl"
          image={ exploratory }
          client="Building Exploratory"
          blurb="A Single Page app showcasing locally listed buildings in London Borough of Islington"
          link="building-exploratory"
        />
        <Card
          width="w-100 w-45-ns w-30-xl"
          image={ berkeley }
          client="Berkeley Homes"
          blurb="Encouraging reporting of positive and negative safety behaviours on construction sites"
          link="berkeley"
          />

      </div>
    </section>
  )
}

export default Work;
