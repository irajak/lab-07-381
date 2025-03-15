import React from 'react';
import './App.css';

function Square() {
  return (
    <button className="square">
      1
    </button>
  );
}

function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}