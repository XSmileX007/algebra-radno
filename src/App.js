import logo from './logo.svg';
import './App.css';
import React from 'react';
import randomstring from 'randomstring';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Moja prva aplikacija
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Učenje React-a
        </a>
        <p>Ovdje zelim random string: {randomstring.generate()}</p>
      </header>
    </div>
  );
}

export default App;
