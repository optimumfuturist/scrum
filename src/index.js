import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import localforage from 'localforage';

localforage.config({
  driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
  name        : 'OptimumScrum',
  version     : 2.0,
  size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName   : '_attendees', // Should be alphanumeric, with underscores.
  description : 'Attendees list for participants and absentees'
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
