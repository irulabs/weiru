import React, { Component } from 'react';


import Landing from './Landing';
import Nav from './Nav';
import WhoWeAre from './WhoWeAre';
import Clients from './Clients';
import Work from './Work';
import Contact from './Contact';

import About from './About';
import OurWay from './OurWay';

class App extends Component {
  render() {
    return (
      <div>
        <Nav position="fixed" borders="bb bw1 b--dark-pink"/>
        <About />
        <OurWay />
        <Clients />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
