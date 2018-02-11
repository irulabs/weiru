import React, { Component } from 'react';

import Nav from './Nav';
import beMobile from '../assets/exploratory/be-mobile.png';
import beDesk1 from '../assets/exploratory/be-desktop.png';
import beDesk2 from '../assets/exploratory/be-desktop2.png';
import goal from '../assets/icons/goal.svg';
import implementation from '../assets/icons/implementation.svg';
import success from '../assets/icons/success.svg';

class BuildingExploratory extends Component {
    render() {
        return (
            <div>
                <Nav color="bg-dark-magenta" position="fixed"/>
                <div className="ph4 ph5-m ph7-l">

                    <h3 className="tc mt0 pt6"> CLIENT WORK </h3>
                    <h1 className="f1 tc"> The Building Exploratory </h1>
                    <p className="f4 tc"> A Single Page app showcasing locally listed buildings in London Borough of Islington </p>
                    <img src={beMobile} alt="design-images" />

                    <div className="flex justify-center items-center">
                      <img className="w2" src={goal} alt="goal" />
                      <h3 className="pl2 pt2">Project Goal </h3>
                    </div>
                    <p className="f4">
                    The Building Exploratory came to us with a need to build an interactive app to showcase data from their Islington Local List project. During the project, volunteers collected and documented information about 2000 locally listed buildings in the London Borough of Islington.
                    </p>
                    <p className="f4">
                    Our task was to build an app which would present this information in an appealing way to encourage engagement by the wider community and have the content dynamically update when new data is added to The Building Exploratory’s databank.
                    </p>
                    <img src={beDesk1} alt="design-images" />

                    <div className="flex justify-center items-center">
                        <img className="w2" src={implementation} alt="implementation" />
                        <h3 className="pl2">Implementation </h3>
                    </div>
                    <p className="b"> Backend </p>
                    <p className="f4"> In order to minimise the time spent on handling the upload of data, we devised a more time effective solution of automatically transferring newly inputted data from a master google sheet to the app’s own MongoDB database. This met the client’s requirement of having a central data storage, which also fed the app so that the content is always in sync. </p>
                    <p className="b"> Frontend </p>
                    <p className="f4"> For the first version of the app, we recommended that we build a map view and a list view to display the data. Presenting the data in such a visual way is an opportunity to engage the wider community with the historic buildings in their local area. To ensure smooth interactions, we built a Single Page App and we integrated Mapbox to provide beautiful maps. </p>
                    <img src={beDesk2} alt="design-images" />

                    <div className="flex justify-center items-center">
                        <img className="w2" src={success} alt="success" />
                        <h3 className="pl2">Project Outcome </h3>
                    </div>
                    <p className="f4"> We like to work in an iterative way following the agile methodology and Islington Local List was no exception to this approach. We’ve worked very closely with The Building Exploratory to achieve the first version. Once it has been tested with users and critical feedback has been gathered, we will be working on ways to improve the experience further. </p>

                </div>
                <Nav color="bg-dark-magenta" />
            </div>
        );
    }
}

export default BuildingExploratory;
