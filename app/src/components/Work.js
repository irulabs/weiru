import React from 'react';

import Card from './Card';

import placeholder1 from '../assets/placeholder/1.jpg';
import placeholder2 from '../assets/placeholder/2.jpg';

const Work = () => {
  return (
    <section className="ph4 ph6-m ph7-l pv5 tc">
      <h3>Our Work</h3>
      <div className="flex-ns justify-between-ns">
        <Card
          image={ placeholder1 }
          client="Etiam Nibh"
          blurb="Nullam id dolor id nibh ultricies vehicula ut id elit."/>
        <Card
          image={ placeholder2 }
          client="Risus Egestas"
          blurb="Nullam quis risus eget urna mollis ornare vel eu leo."/>
        <Card
          image={ placeholder1 }
          client="Commodo Dolor"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>

      </div>
    </section>
  )
}

export default Work;
