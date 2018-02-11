import React from 'react';

import Card from './Card';

import quodl from '../assets/quodl/quodl-mobile.png';
import exploratory from '../assets/exploratory/be-mobile.png';
import berkeley from '../assets/berkeley/berkeley-mobile.png';

const Work = () => {
  return (
    <section className="ph7-l pv5 tc">
      <h3>Our Work</h3>
      <div className="flex-ns justify-between-ns">
        <Card
          image={ quodl }
          client="Etiam Nibh"
          blurb="Nullam id dolor id nibh ultricies vehicula ut id elit."/>
        <Card
          image={ exploratory }
          client="Risus Egestas"
          blurb="Nullam quis risus eget urna mollis ornare vel eu leo."/>
        <Card
          image={ berkeley }
          client="Commodo Dolor"
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>

      </div>
    </section>
  )
}

export default Work;
