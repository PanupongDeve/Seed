import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "../components/Comment";
class ShowComment extends Component {
  render() {
    return (
      <div>
        <h1>Show AllComment</h1>
        {this.props.comments.commentReducer.map(comment => (
          <Comment
            key={comment.id}
            name={comment.name}
            message={comment.message}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state };
};

export default connect(mapStateToProps)(ShowComment);
