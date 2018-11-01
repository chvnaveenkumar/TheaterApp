import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';

class Layout extends Component {
    render() {
      return (
        <div>
          <Switch>
          <Route exact path="/" component={Login}/>
          </Switch>
        </div>
      );
    }
  }
  
export default Layout;
