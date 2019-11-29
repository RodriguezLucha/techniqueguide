import React, {Component} from 'react';
import {Button, Header, Portal, Segment} from 'semantic-ui-react';

export default class Help extends Component {
  state = {open: false}

  handleClick = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    const {open} = this.state;

    return (
      <span>
        <Button
          className="ui icon green circular right floated mini button"
          content={open
            ? <i aria-hidden="true" className="help icon"></i>
            : <i aria-hidden="true" className="help icon"></i>}
          negative={open}
          onClick={this.handleClick}
          positive={!open}
        />
        <Portal onClose={this.handleClose} open={open}>
          <Segment style={{left: '40%', position: 'fixed', top: '50%', zIndex: 1000}}>
            <Header>About</Header>
            <p>
              This is a personal website designed by
              <a href="https://www.linkedin.com/in/rudy-rodriguez-11424020/" rel="noopener noreferrer" target="_blank"> Rudy </a> to learn and showcase React with Semantic UI.
              <div>
                Mobile friendly.
              </div>
            </p>
            <p>
              It contains small tools which can be used during a
              calisthenics workout.
            </p>
          </Segment>
        </Portal>
      </span>
    );
  }
}
