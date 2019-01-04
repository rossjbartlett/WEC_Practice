import React, { Component } from 'react';
import MonthWeek from './components/month-week.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MonthWeek startDate={1}/>
      </div>
    );
  }
}

export default App;
