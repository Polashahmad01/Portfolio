import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './component/Header/Header';
import Body from './component/Body/Body';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Body />
      </Router>
    </div>
  );
}

export default App;
