import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Form from './Form.js'
import Dash from './Dash.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Route path="/" exact component={Form} />
          <Route path="/dash" exact component={Dash} />
      </div>
    );
  }
}

export default App;
