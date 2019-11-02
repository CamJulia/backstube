import React from 'react';
import './App.css';
import Cookies from './components/CookieList';

function App() {
  return (
    <div className="App">
      <h1>Sophies Backstube</h1>
      <div className="GridContainer">
        <div className="zettel">
          <h2>Einkaufszettel</h2>
        </div>
        <div>{Cookies}</div>
        <div className="rezepte">
          <h2>Rezepte</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
