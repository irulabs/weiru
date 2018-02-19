import React, { Component } from 'react';

import Nav from './Nav';
import berkeleyMobile from '../assets/berkeley/berkeley-mobile.png';
import goal from '../assets/icons/goal.svg';
import implementation from '../assets/icons/implementation.svg';
import success from '../assets/icons/success.svg';

class Berkeley extends Component {
  render() {
    return (
      <div>
        <Nav color="bg-white" position="fixed" borders="bb bw1 b--dark-green"/>
        <div className="ph4 ph5-m ph7-l">

          <h3 className="tc mt0 pt6"> CLIENT WORK </h3>
          <h1 className="f1 tc"> Berkeley Homes </h1>
          <p className="f4 tc"> Encouraging reporting of positive and negative safety behaviours on construction sites </p>
          <img src={berkeleyMobile} alt="design-images" />

          <div className="flex justify-center items-center">
            <img className="w2" src={goal} alt="goal" />
            <h3 className="pl2 pt2">Project Goal </h3>
          </div>
          <p className="f4">
            Berkeley Homes - Goodmans Fields is a British property developer. Priding itself on safety, Goodmans Fields wanted to explore ways to encourage reporting of safety concerns on site. Initially they incentivised this with a non-digital prize-based solution, but noticed that this had little effect on reporting rates. Thus, they came to us with paper prototype of a safety tool which would allow builders to report both positive and negative practices noticed on-site and we turned it into an application used by their builders which increased reporting.
          </p>


          <div className="flex justify-center items-center">
            <img className="w2" src={implementation} alt="implementation" />
            <h3 className="pl2">Implementation </h3>
          </div>
          <p className="f4">
            With the knowledge that current methods weren’t working, we knew that in order to build an effective solution we needed to understand <span className="b">why</span> builders weren’t using the current system. During the research phase, we discovered that the main reason for the low response rate was the amount of detail required from the builder in a language which was often not their native tongue.
          </p>
          <p className="f4">
            Once we understood the issue, we were able to architect a solution which minimised the steps that builders had to take to successfully report an event. We also realised that the forms were usually filled out once the builder was off-site meaning that it was sometimes hard to get accurate information about precisely where on site the event happened. We solved this by creating a feature which allowed the user to provide visual information about the location and encourage reporting on the spot. All this reporting data needed to be reviewed by the safety manager who could take the necessary follow-up action, and so we set up a system of email alerts to the relevant parties when a new report is submitted.
          </p>

          <div className="flex justify-center items-center">
            <img className="w2" src={success} alt="success" />
            <h3 className="pl2">Project Outcome </h3>
          </div>
          <p className="f4">
            The results of the digital product became visible within just two weeks of the product going live. The number of responses increased significantly and most of the responses were in the form of an image, showing how sometimes we can collect the information we need in unexpected ways. Lowering the barrier to entry and input fields has led to a more connected environment for Goodmans Fields in which all members on site contribute to maintaining a safe environment.
          </p>

        </div>
      </div>
    );
  }
}

export default Berkeley;
