import React, {PropTypes} from 'react';
import Button from '../components/Button'
import ContactPage from '../components/ContactPage'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        firstname: state.firstname
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {}
// }

const VisibleContactForm = connect(mapStateToProps)(ContactPage)

export default VisibleContactForm