import React from 'react'
import ContactForm from './ContactForm'
import { connect } from 'react-redux'

class ContactPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {firstname:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    console.log(values)
   this.setState({ firstname:values.firstName })
  }

  render() {
    return (
      <div>
        <input value={this.state.firstname}></input>
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