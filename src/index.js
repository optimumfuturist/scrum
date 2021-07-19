import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import localforage from 'localforage';
import { LF_KEYS } from './constants';

localforage.config({
  name        : 'of.scrum',
  description : 'Attendees list for participants and absentees'
});

localforage.getItem(LF_KEYS.PERSONS).then(values => {
  const persons = values;
  if (!persons) {
    localforage.setItem(LF_KEYS.PERSONS, []);
  }
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
