import React, { Component } from 'react';
import './App.css';

import {Home} from './components/Home';
import {Header} from './components/Header'

class App extends Component {
  render() {
    var user = {
      name: 'Anna',
      hobbies: ["Football","Reading"] 
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Max"} age={27} user={user}>
            <p>This is a Paragraph </p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
