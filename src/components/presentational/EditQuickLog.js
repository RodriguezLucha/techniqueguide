import React, {Component} from 'react';
import {Button, Form, Header, Modal, TextArea} from 'semantic-ui-react';

export default class EditQuickLog extends Component {
  state = {
    modalOpen: false,
    text: ''
  };

  handleOpen = () => this.setState({
    modalOpen: true,
    text: this.props.selected_text
  });

  handleClose = () => { this.setState({modalOpen: false}); };

  handleEdit = () => {
    this.props.onClickEdit(this.props.selected_key, this.state.text);
    this.setState({
      modalOpen: false
    });
  };

  handleChanged = (event, data) => { this.setState({text: data.value}); };

  render() {
    return (
      <Modal onClose={this.handleClose} open={this.state.modalOpen} trigger=
        {
          <Button disabled={!this.props.selected_key} onClick={this.handleOpen}>
            <i aria-hidden="true" className="edit icon"/> Edit
          </Button>
        }>
        <Header content='Edit Entry' />
        <Modal.Content>
          <Form>
            <TextArea fluid  onChange={this.handleChanged}
              placeholder='Add a quick note...' value={this.state.text}/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleEdit} positive> Edit </Button>
          <Button onClick={this.handleClose}> Cancel </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
