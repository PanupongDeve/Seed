import React, {PropTypes} from 'react';
import Button from '../components/Button'
import ContactPage from '../components/ContactPage'
import { connect } from 'react-redux'
import {read} from '../actions'

const mapStateToProps = state => {
    return {
        firstname: state.firstname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispathName : (firstname)  => {dispatch(read(firstname))}
    }
}

const VisibleContactForm = connect(mapStateToProps,mapDispatchToProps)(ContactPage)

export default VisibleContactForm