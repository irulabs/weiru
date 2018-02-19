import React, { Component } from 'react';

import Nav from './Nav';
import quodlDesktopMobile from '../assets/quodl/quodl-desktop-mobile.png';
import quodlMobileOnly from '../assets/quodl/quodl-mobile-only.png';
import quodlDesktop2 from '../assets/quodl/quodl-desktop-2.png';
import goal from '../assets/icons/goal.svg';
import implementation from '../assets/icons/implementation.svg';
import success from '../assets/icons/success.svg';

class Quodl extends Component {
  render() {
    return (
      <div>
        <Nav color="bg-white" position="fixed" borders="bb bw1 b--light-orange" />
        <div className="ph4 ph5-m ph7-l">

          <h3 className="tc mt0 pt6"> CLIENT WORK </h3>
          <h1 className="f1 tc"> Quodl </h1>
          <p className="f4 tc"> A real-time quiz app to increase
          in-lecture engagement and support learning </p>

          <img src={quodlDesktopMobile} alt="design-images" />

          <div className="flex justify-center items-center">
            <img className="w2" src={goal} alt="goal" />
            <h3 className="pl2 pt2">Project Goal </h3>
          </div>
          <p className="f4">
            Dr Stian Reimers, a senior Lecturer in Psychology at City University of London approached us with an idea of enhancing the student learning experience by creating an application that used the principles of METHODOLOGY to aid learning.The background research by Dr Reimers into cognitive psychology and an already existing MVP meant that we were in a great position to take this to the next level.
          </p>

          <h3 className="pl2 pt2 tc"> What was our solution? </h3>
          <p className="f4">
            A real time-quiz app that promotes student engagement and allows lecturers to assess the responses of students to spot any collective and individual gaps in knowledge.
          </p>

          <div className="flex-ns justify-center tc pv3">
            <div className="w-100 mv2 w-40-ns ba bw1 b--light-orange mh2 ph2">
              <h3> Lecturer </h3>
              <p> Ability to set up multiple modules </p>
              <p> Run Live quizzes </p>
              <p> Set up gamification with medals and trophies </p>
              <p> Review student progress, keeping track of how individuals are getting on </p>
            </div>
            <div className="w-100 mv2 w-40-ns ba bw1 b--light-orange mh2 ph2">
              <h3> Student </h3>
              <p> Mainly used on mobile devices </p>
              <p> Join live quizzes </p>
              <p> Instant feedback with gamification aspect </p>
              <p> Ability to review & revise quizzes </p>
            </div>
          </div>



          <div className="flex justify-center items-center">
            <img className="w2" src={implementation} alt="implementation" />
            <h3 className="pl2">Implementation </h3>
          </div>
          <p className="f4">
            One of the challenges during development was to build a product that satisfies the needs of both lecturers and students. Quizzes on the app run in real-time, enabling lecturers to integrate test-taking into their lectures.  This added an extra layer of complexity and we focused on using websockets with socket.io to support real-time interactions. The app became so well-adopted that City University returned to us to work on optimising the real time experience when the usage boomed from the early-adoption figures of around 50 to 250 simultaneous users. We love it when products we’ve built are successful enough to warrant our working on supporting a growing user base!
          </p>
          <img className="pv4" src={quodlMobileOnly} alt="design-images" />
          <img src={quodlDesktop2} alt="design-images" />

          <div className="flex justify-center items-center">
            <img className="w2" src={success} alt="success" />
            <h3 className="pl2">Project Outcome </h3>
          </div>
          <p className="f4">
            Quodl has been steadily developed over the last couple of years during which it was nominated for the Guardian University Award in Teaching Excellence. It’s been a very exciting process to have been a part of and Dr Reimers has been an amazing product owner who has understood the needs of both the lecturers and students which has led to a refined product thatis ever evolving and continues to improve the student experience.
          </p>

        </div>
      </div>
    );
  }
}

export default Quodl;
