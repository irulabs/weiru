import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import BuildingExploratory from './components/BuildingExploratory';
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
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
