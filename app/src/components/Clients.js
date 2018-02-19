import React from 'react';
import berkeley from '../assets/clients/berkeley.png';
import buildingExploratory from '../assets/clients/building-exploratory.png';
import city from '../assets/clients/city.svg';
import dwyl from '../assets/clients/dwyl.png';

const Clients = () => {
  return (
    <section className="ph4 ph6-l pv4 tc bg-near-white">
      <h2 className="mt0 dark-pink">You&#x27;re in good company</h2>
      <div className="flex justify-between flex-wrap mt4">
        <div className="w-50 w-25-ns tc flex items-center justify-center ph1 mv2">
          <img alt="Berkeley Homes" className="h2 h2p5-ns" src={berkeley} />
        </div>
        <div className="w-50 w-10-ns tc flex items-center justify-center ph1 mv2">
          <img alt="dwyl" className="h2 h2p5-ns" src={dwyl} />
        </div>
        <div className="w-50 w-25-ns tc flex items-center justify-center ph1 mv2">
          <img alt="The Building Exploratory" className="h1 h1p5-ns" src={buildingExploratory} />
        </div>
        <div className="w-50 w-25-ns tc flex items-center justify-center ph1 mv2">
          <img alt="City University London" className="h2 h2p5-ns" src={city} />
        </div>
      </div>
    </section>
  )
}

export default Clients;
