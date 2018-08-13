import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './views/Board.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sticky Notes</h1>

        <Board></Board>

      </div>
    );
  }
}

export default App;
