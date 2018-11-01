import React, { Component } from 'react'
import Navbar  from '../Navbar'
import LoginForm from './LoginForm'

class Login extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <LoginForm />
            </div>
        );
    }
}

export default Login