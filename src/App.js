import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Csv from "./Csv";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hey its me</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Csv />
    </div>
  );
}

export default App;
