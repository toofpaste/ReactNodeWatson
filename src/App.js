import React from 'react';
import logo from './logo.svg';
import './App.css';
const personality = require( './watson-helpers/personality');

personality('@realDonaldTrump')
    .then(function(personalityProfile) {
      console.log(personalityProfile.traits)
      console.log(personalityProfile.needs)
    })
    .catch(function(error) {
      console.log(error)
    })

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
