import React, {Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top">Theater Application</a>
             <div className="navbar-collapse collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <button type="button" className="btn btn-success">SignUp</button>
                    </li>
                    <br/>
                    <li className="nav-item">
                    <button type="button" className="btn btn-success">SignIn</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        );
    }
}

export default Navbar;