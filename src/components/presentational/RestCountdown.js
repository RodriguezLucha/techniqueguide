import React from 'react';
import { renderRemainingString } from '../container/RestCountdown.js'
import { Dropdown } from 'semantic-ui-react'

var minuteOptions = [
  {
    key: '1',
    text: '3 seconds',
    value: '0.05',
  },
  {
    key: '3',
    text: '3 minutes',
    value: '3',
  },
  {
    key: '4',
    text: '4 minutes',
    value: '4',
  },
  {
    key: '5',
    text: '5 minutes',
    value: '5',
  }
]

export class RestCountdown extends React.Component {

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 45);
  }

  render() {

    const remainingParts = renderRemainingString(
      this.props.remaining, this.props.runningSince
    );
    const remainingString = [
      remainingParts[0],
      remainingParts[1],
    ].join(':');

    const remainingStringMs = [remainingParts[2], remainingParts[3]].join("")

    const isPaused = this.props.runningSince !== null;
    const playOrPauseButton = ( isPaused ?
      <button className="ui icon button" disabled={!this.props.restTime}
        onClick={this.props.onClickPause}>
        <i aria-hidden="true" className="pause icon"></i>
      </button> :
      <button className="ui icon button" disabled={!this.props.restTime}
        onClick={this.props.onClickStart}>
        <i aria-hidden="true" className="play icon"></i>
      </button> );

    return (
      <div className='ui segments'>
        <div className='ui center aligned massive attached inverted segment'>
          <i aria-hidden="true" className="arrow alternate circle down icon"></i> Rest Countdown
        </div>
        <div className='ui center aligned attached segment'>
          <Dropdown
            button
            className='icon'
            fluid
            placeholder='Select Time'
            icon='time'
            onChange={(e, {value}) => this.props.onTimeSelected(value)}
            value={this.props.restTime}
            options={minuteOptions} />
        </div>

        <div className='ui hidden center aligned very padded attached massive segment'>
          <span className='super huge display'>{remainingString}</span>
          <span className='large display'>.{remainingStringMs}</span>
        </div>
        <div className='ui large attached two buttons'>
          <button className="ui icon button" disabled={!this.props.restTime}
            onClick={this.props.onClickReset}>
            <i aria-hidden="true" className="stop icon"></i>
          </button>
          {playOrPauseButton}
        </div>
      </div>
    );
  }
}
