import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <Header className="App-header"/>
      <Main className="App-main"/>
    </div>
  );
}

export default App;
