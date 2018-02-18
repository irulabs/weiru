import React from 'react';

import CheckboxItem from './CheckboxItem';

const OurWay = () => {
  return (
    <section className="ph4 ph6-m ph7-l pv5 bb b--near-white bw3">
      <h2 className="underline underline-yellow dark-pink tl">Our Way</h2>

      <div className="flex flex-column">

        <CheckboxItem
          title="Crafted"
          text="How we build it is important. Taking care early on means that we build products which are scalable by default. As your userbase grows, the code we crafted for you will serve you well."
          />

        <CheckboxItem
          title="Modern Tech"
          text="We love coding, so we&#x27;re on top of the ever-changing landscape of web development. We build products in the best way possible, using tech that is appropriate for the job."
          />

        <CheckboxItem
          title="Not Locked In"
          text="Want your in-house dev team to handle maintenance? No problem: our code is tested and designed for humans to read, not just computers. We don't believe in locking people in"
          />

        <CheckboxItem
          title="Iterate by Default"
          text="We build what&#x27;s needed first, then iterate based on data. This is only possible through the expert technologists (that's us) and the expert in the why of the app (that's you) communicating frequently and directly. That's why you'll never have to go through an account manager to talk about your product"
          />
      </div>
    </section>
  )
}


export default OurWay;
