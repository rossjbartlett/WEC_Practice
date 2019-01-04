import React, { Component } from 'react';
import './App.css';
import Month from './components/month.js'
import Popup from 'react-popup';
import './components/popup.css'


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Popup/>
        <Month 
        name={'January'} 
        length={31} 
        startIndex={2} 
        prevEndDate={31}/>
      </div>
    );
  }
}

export default App;
