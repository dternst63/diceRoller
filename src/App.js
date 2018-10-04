import React, { Component } from 'react';
import './App.css';
import Start from './Start';
import Die from "./Die"

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
            <h1 className="App-title">Welcome to My Dice Roller</h1>
      </header>
        <Start />
        <Die />
      </div>
      );
  }
}

export default App;
