import React, {Component} from 'react';
import {Guides} from './Guides.js';
import Help from './components/presentational/Help.js';

export default class Home extends Component {

  render() {

    return (
      <div className="App">
        <div className="ui inverted attached segment">
          <div>
            <Help/>
          </div>
          <div className="ui hidden clearing divider"/>
          <div className="ui inverted vertical very padded center aligned massive segment">
          Technique Guide
          </div>
        </div>
        <Guides/>
      </div>
    );
  }
};
