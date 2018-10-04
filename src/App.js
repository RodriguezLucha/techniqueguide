import React, {Component} from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {ImplicitCallback, Security} from '@okta/okta-react';
import Home from './Home.js';
import {store} from './Guides.js';
import {Provider} from 'react-redux';

const config = {
  issuer: 'https://dev-684189.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: ''
};

class App extends Component {
  render() {
    return (
      <Router>
        <Security client_id={config.client_id}
          issuer={config.issuer}
          redirect_uri={config.redirect_uri}
        >
          <Route component={Home} exact={true} path='/'/>
          <Route component={ImplicitCallback} path='/implicit/callback'/>
        </Security>
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
