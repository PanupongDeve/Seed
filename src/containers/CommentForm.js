import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../actions";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class CommentForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      name,
      message
    };
    console.log(data);
    this.props.dispatch(addComment(data));
  };
  render() {
    return (
      <div>
        <h3>Add Comment</h3>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input type="text" innerRef={node => (this.getName = node)} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="" sm={2}>
              Mesage
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                innerRef={node => (this.getMessage = node)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Button>Click</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default connect()(CommentForm);
