import React from 'react';

export class RepetitionGuide extends React.Component {
  handleStartClick = () => {
    this.props.incrementSteps();
    this.incrementStepsInterval = setInterval(
      () => this.props.incrementSteps(), 1000);
  }

  handleStopClick = () => {
    clearInterval(this.incrementStepsInterval);
    this.props.onClickReset();
  }

  handlePauseClick = () => {
    clearInterval(this.incrementStepsInterval);
    this.props.onClickPause();
  }

  render() {
    let step_string = '-';
    if(this.props.step !== null){
      step_string = this.props.steps[this.props.step];
    }
    let steps_string = this.props.steps.join(', ');

    const playOrPauseButton = (!this.props.isRunning
      ? <button className="ui icon button" onClick={this.handleStartClick} >
        <i aria-hidden="true" className="play icon"></i>
      </button>
      : <button className="ui icon button" onClick={this.handlePauseClick}>
        <i aria-hidden="true" className="pause icon"></i>
      </button>
    );

    return(
      <div className='ui segments'>
        <div className='ui center aligned massive attached inverted segment'>
          <i aria-hidden="true" className="clock icon"></i>
            Repetition Guide
        </div>
        <table className="ui definition attached large table">
          <tbody className="">
            <tr className="">
              <td className="four wide">Steps</td>
              <td className="twelve wide">{steps_string}</td>
            </tr>
            <tr className="">
              <td className="four wide">Count</td>
              <td className="twelve wide super huge display">
                <div className="ui statistic">
                  <div className="value">{this.props.count}</div>
                </div>
              </td>
            </tr>
            <tr className="">
              <td className="four wide">Step</td>
              <td className="twelve wide super huge display">
                <div className="ui statistic">
                  <div className="value">{step_string}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='ui large attached two buttons'>
          <button className="ui icon button" onClick={this.handleStopClick}>
            <i aria-hidden="true" className="stop icon"></i>
          </button>
          {playOrPauseButton}
        </div>
      </div>
    );
  }
}
