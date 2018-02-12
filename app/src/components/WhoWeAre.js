import React from 'react';

import crafted from '../assets/icons/crafted.svg';
import modernTech from '../assets/icons/modern-tech.svg';
import notLockedIn from '../assets/icons/locked-in.svg';
const WhoWeAre = () => {
  return (
    <section className="ph4 ph6-m ph7-l pv5">
    { /*<h3>We build products with care</h3> */}
      <p className="f3 fw6 tj">
        <span className="underline bungee f2">Care.</span> &nbsp;
        In what we work on. In how we build it. Building a product is a
        wonderful thing, but too often the people who own the idea are left
        beind. As developers, we take you with us, working with you to define a
        solution. Perhaps you need help defining the details of your MVP,
        technical feedback on designs or __________________________________ ? We are happy to
        help - the more we work together, the better the product will be. And
        that is what makes us happy: building beautiful, well-thought-out and
        scalable products that delight users.
      </p>

      <div className="mt5 mt6-ns flex flex-column flex-row-ns justify-between">
        <div className="flex flex-column w-30-ns">
          <img src={crafted} className="h4" alt="Compass icon" />
          <h3 className="tc f3">Crafted</h3>
          <p>How we build it is important. Taking care early on means that we
          can build products which are scalable by default. As your
          userbase grows, the code we crafted for you will serve you well.</p>
        </div>
        <div className="flex flex-column w-30-ns">
          <img src={modernTech} className="h4" alt="Pacman ghost icon" />
          <h3 className="tc f3">Modern Tech</h3>
          <p>We love coding, so we&#x27;re on top of the ever-changing landscape of
          web development. We build products in the best way possible, using tech
          that is appropriate for the job.</p>
        </div>
        <div className="flex flex-column w-30-ns">
          <img src={notLockedIn} className="h4" alt="broken chains icon" />
          <h3 className="tc f3">Not Locked In</h3>
          <p>We write code for humans to understand and our
          code is tested, so if you want
          your own development team to handle maintenance, you can easily take
          it in-house.</p>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre;
