import React from 'react';
import berkeley from '../assets/clients/berkeley.png';
import buildingExploratory from '../assets/clients/building-exploratory.png';
import city from '../assets/clients/city.svg';
import dwyl from '../assets/clients/dwyl.png';
import emf from '../assets/clients/emf.png';

const Clients = () => {
  return (
    <section className="ph7-l pv2 tc">
      <h3 className="mt0">You&#x27;re in good company</h3>
      <div className="flex justify-between">
        <div className="h2 w-10 tc flex items-center justify-center">
          <img alt="" src={berkeley} />
        </div>
        <div className="h2 w-10 tc flex items-center justify-center">
          <img alt="" src={buildingExploratory} />
        </div>
        <div className="h2 w-10 tc flex items-center justify-center">
          <img alt="" src={city} />
        </div>
        <div className="h2 w-10 tc flex items-center justify-center">
          <img alt="" className="w-70" src={dwyl} />
        </div>
        <div className="h2 w-10 tc flex items-center justify-center">
          <img alt="" src={emf} />
        </div>
      </div>
    </section>
  )
}

export default Clients;