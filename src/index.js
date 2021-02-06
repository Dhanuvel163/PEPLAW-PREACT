/** @jsx h */
import App from './App';
import * as serviceWorker from './serviceWorker';
import {h, render } from 'preact';
render( <App />, document.getElementById('root'));
serviceWorker.register();

