import React from 'react'
import ContactForm from '../components/ContactForm'

class ContactPage extends React.Component {
  submit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <ContactForm onSubmit={this.submit} />
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