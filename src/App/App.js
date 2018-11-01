import React, { Component } from 'react';
import './App.css';
import Layout from '../Layout/Layout'
import { BrowserRouter as Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Layout}/>
        </Switch>
      </div>
    );
  }
}

export default App;
