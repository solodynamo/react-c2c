/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.js';


const appRoot = document.getElementById("app");
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);