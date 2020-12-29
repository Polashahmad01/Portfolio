import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './component/Header/Header';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
