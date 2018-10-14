import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from './Landing.js'
import Dash from './Dash.js'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Message from './Message.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Route path="/" exact component={Landing} />
          <Route path="/dash" exact component={Dash} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/message" exact component={Message} />

      </div>
    );
  }
}

export default App;
