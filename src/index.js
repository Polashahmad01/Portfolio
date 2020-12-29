import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './component/StateProvider/StateProvider';
import reducer, { initialState } from './component/reducer/reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById('root')
);


reportWebVitals();
