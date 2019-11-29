import React, {Component} from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {ImplicitCallback, Security} from '@okta/okta-react';
import Home from './Home.js';
import {store} from './Guides.js';
import {Provider} from 'react-redux';


class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Home} exact={true} path='/'/>
      </Router>
    );
  }
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default WrappedApp;
