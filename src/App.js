import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const s = 344;
  return (
    <div className="App">
      <Header />
      {s}
      <Sidebar />
    </div>
  );
}

export default App;
