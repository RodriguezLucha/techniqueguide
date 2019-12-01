import React, {Component} from 'react';
import './App.css';
import Home from './Home.js';
import {store} from './Guides.js';
import {Provider} from 'react-redux';


class App extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default WrappedApp;
