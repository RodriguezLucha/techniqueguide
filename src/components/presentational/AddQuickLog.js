import React, {Component} from 'react';
import {Button, Form, Header, Modal, TextArea} from 'semantic-ui-react';

export default class AddQuickLog extends Component {
  state = {
    modalOpen: false,
    text : ''
  };

  handleOpen = () => this.setState({modalOpen: true});

  handleClose = () => { this.setState({modalOpen: false}); };

  handleAdd = () => {
    this.props.onClickAdd(this.state.text);
    this.setState({modalOpen: false});
  };

  handleChanged = (event, data) =>{ this.setState({text: data.value}); };

  render() {
    return(
      <Modal
        onClose={this.handleClose}
        open={this.state.modalOpen} trigger={
          <Button onClick={this.handleOpen}>
            <i aria-hidden="true" className="add icon"/> Add
          </Button>
        }>
        <Header content='Add Entry' />
        <Modal.Content>
          <Form>
            <TextArea fluid  onChange={this.handleChanged}
              placeholder='Add a quick note...'/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleAdd} positive> Add </Button>
          <Button onClick={this.handleClose}> Cancel </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
