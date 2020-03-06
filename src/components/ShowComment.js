import React, {Component} from 'react'
import {connect} from 'react-redux'
class ShowComment extends Component {
    
    render() {
        return (
            <div>
                <h1>Show AllComment</h1>
        {this.props.comments.commentReducer.map(c => <li key={c.id} >Name :{c.name} message:{c.message}</li>) }
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {comments: state}
}

export default connect(mapStateToProps)(ShowComment)
