import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={5} country="in" category="science" apikey = "6c87bc393ce4489c9afaa4af091b325e"/>
      </div>
    )
  }
}