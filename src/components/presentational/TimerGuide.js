import React from 'react';
import {renderElapsedString} from '../container/TimerGuide.js';

export class TimerGuide extends React.Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 45);
  }

  render() {
    const elapsedParts = renderElapsedString(
      this.props.elapsed, this.props.runningSince
    );
    const isPaused = this.props.runningSince !== null;
    const playOrPauseButton = (isPaused
      ? <button className="ui icon button" onClick={this.props.onClickPause}>
        <i aria-hidden="true" className="pause icon"></i>
      </button>
      : <button className="ui icon button" onClick={this.props.onClickStart}>
        <i aria-hidden="true" className="play icon"></i>
      </button>);

    const elapsedString = [
      elapsedParts[0],
    ].join(':');

    const elapsedStringMs = [elapsedParts[1], elapsedParts[2]].join('');

    return (
      <div className='ui segments'>
        <div className='ui center aligned massive attached inverted segment'>
          <i aria-hidden="true" className="arrow alternate circle up icon"></i> Timer Guide
        </div>
        <div className='ui hidden center aligned very padded attached massive segment'>
          <span className='super huge display'>{elapsedString}</span>
          <span className='large display'>.{elapsedStringMs}</span>
        </div>
        <div className='ui large attached two buttons'>
          <button className="ui icon button" onClick={this.props.onClickReset}>
            <i aria-hidden="true" className="stop icon"></i>
          </button>
          {playOrPauseButton}
        </div>
      </div>
    );
  }
}
