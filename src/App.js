import React from 'react';
import timelineData from './data/timeline.json';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
