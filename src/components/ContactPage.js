import React from 'react'
import ContactForm from './ContactForm'
import { connect } from 'react-redux'
import { read } from '../actions';

class ContactPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {firstname:'',lastname:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = (values) => {
    console.log(values)
   this.setState({ firstname:values.firstName,lastname:values.lastName })
   const {dispathName} = this.props
  this.setState(dispathName(`testing`));
   console.log(`setState->`,this.state);
   
  }

  render() {
    return (
      <div>
      
        <input value={this.state.firstname} onChange={this.handleChange}></input>
        <input value={this.state.lastname} onChange={this.handleChange}></input>

        <input value={this.props.firstname}></input>
        <input value={this.props.lastname}></input>
      <ContactForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

// const submit = values => console.log(values);
// const ContactPage = ({dispatch}) => {
//   return (
//     <ContactForm onSubmit={submit} />
//   )
// }

export default ContactPage