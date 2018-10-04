import React from 'react';

import {combineReducers, createStore} from 'redux';
//Components
import {TimerGuideContainer, timerGuideReducer} from './components/container/TimerGuide.js';
import {RestCountdownContainer, restCountdownReducer} from './components/container/RestCountdown.js';
import {RepetitionGuideContainer, repetitionGuideReducer} from './components/container/RepetitionGuide.js';
import {QuickLogContainer, quickLogReducer} from './components/container/QuickLog.js';

const reducer = combineReducers({
  timerGuide : timerGuideReducer,
  restCountdown : restCountdownReducer,
  repetitionGuide : repetitionGuideReducer,
  quickLog : quickLogReducer
});
export const store = createStore(reducer);

export class Guides extends React.Component {
  render(){
    return (
      <div>
        <div className="ui hidden divider"/>
        <div className="ui two column stackable grid" >
          <div className="column">
            <TimerGuideContainer/>
            <RestCountdownContainer/>
          </div>
          <div className="column">
            <RepetitionGuideContainer/>
            <QuickLogContainer/>
          </div>
        </div>
        <div className="ui hidden divider"/>
      </div>
    );
  }
}
