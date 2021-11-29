import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import MainDisplay from './screens/MainDisplay';
import SingleDisplay from './screens/SingleDisplay';


ReactDOM.render(
  <React.StrictMode>
    {/* <MainDisplay /> */}
    <SingleDisplay />
  </React.StrictMode>,
  document.getElementById('root')
);

