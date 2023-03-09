import React from 'react';
import { createRoot } from 'react-dom/client';
import localforage from 'localforage';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
