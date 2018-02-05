import React, { Component } from 'react';

import Landing from './Landing';
import Nav from './Nav';
import WhoWeAre from './WhoWeAre';
import Clients from './Clients';
import Work from './Work';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Landing />
        <WhoWeAre />
        <Clients />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
