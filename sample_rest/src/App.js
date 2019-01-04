import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  grabData() {
    axios.get("http://localhost:8080/yum").then(data => this.setState({data})).catch(e => console.log(e));
  }

  render() {
    this.grabData()
    return (
      <div className="App">
        {this.state.data === null ? "Waiting for data" : "Found something! Here you go" + this.state.data}
      </div>
    );
  }
}

export default App;
