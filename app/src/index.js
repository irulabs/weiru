import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import BuildingExploratory from './components/BuildingExploratory';
import Quodl from './components/Quodl';
import Berkeley from './components/Berkeley';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/case-study/building-exploratory" component={BuildingExploratory} />
            <Route exact path="/case-study/quodl" component={Quodl} />
            <Route exact path="/case-study/berkeley" component={Berkeley} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
