import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to hear</h1>
        <input type="email" className="email" placeholder="email"></input>
        <input type="password" className="pasword" placeholder="password"></input>
        <button className="submit"></button>
      </header>
    </div>
  );
}

export default App;
