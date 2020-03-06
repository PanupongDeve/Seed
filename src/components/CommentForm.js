import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/'
class CommentForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const name = this.getName.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            name,
            message
        }
        console.log(data);
        this.props.dispatch(addComment(data))

        
    }
    render() {
        return (
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' ref={(input) => this.getName = input}/>
                    <br/>
                    <textarea rows='5' cols='28' ref= {(input) => this.getMessage = input}/>
                    <br/>
                    <button>Click</button>
                </form>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addComment: data => {
//             dispatch(addComment(data))
//         }
//     }
// }

export default connect()(CommentForm)
