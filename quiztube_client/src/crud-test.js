
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
//import '../node_modules/bootstrap/dist/css/
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import join from 'url-join';
import axios from 'axios';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();

var isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(function(config) {
  // Concatenate base path if not an absolute URL
  if ( !isAbsoluteURLRegex.test(config.url) ) {
    config.url = join('http://localhost:3000', config.url);
  }
  console.log("config: " + JSON.stringify(config));
  return config;
});
