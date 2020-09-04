import React from 'react';
import Giphy from "./components/Giphy";
import "./App.css";

const App = () => {
  return (
      <div className="app">
    <div className="left-scene">
      <input className="form-search" />
      <div className="selected-gif">
        THE SELECTED GIF HERE
      </div>
    </div>

    <div className="right-scene">
      THE SIDEBAR GIF LIST HERE
      <Giphy />
    </div>
  </div>
  );
};

export default App;
