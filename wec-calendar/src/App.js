import React, { Component } from 'react';
import MonthWeek from './components/month-week.js'
import logo from './logo.svg';
import './App.css';
import Month from './components/month.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Month 
        name={'January'} 
        startDate={'Monday'} 
        length={31} 
        startIndex={2} 
        prevEndDate={31}/>
      </div>
    );
  }
}

export default App;
