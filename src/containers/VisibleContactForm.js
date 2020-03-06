import React, {PropTypes} from 'react';
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import {connect} from 'react-redux'
import {read} from '../actions'

class VisibleContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: ''
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange = e => this.setState({value: e.target.value});

    handleSubmit = (e) => {

        //   this.setState({ firstname:e.firstName,lastname:e.lastName })
        const data = {
            id: new Date() ,
            firstName: e.firstName,
            lastName: e.lastName
        }
        console.log(data);
        console.log(`prop->`,this.props);
  
    }

    render() {
        return (
            <div>

                <input value={this.state.firstname} onChange={this.handleChange}></input>
                <input value={this.state.lastname} onChange={this.handleChange}></input>

                <input value={this.props.firstname}></input>
                <input value={this.props.lastname}></input>
                <ContactForm onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {firstname: state.firstname}
}

const mapDispatchToProps = (dispatch) => {
    return {
        newfirstName: (firstname) => {
            dispatch(read(firstname))
        }
    }
}

VisibleContactForm = connect(mapStateToProps, mapDispatchToProps)(VisibleContactForm)

export default VisibleContactForm