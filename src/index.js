import React from 'react';
// import ReactDOM from 'react-dom';
import MyCustomRenderer from './myCustomRenderer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
MyCustomRenderer.render(<App />, document.getElementById('root'));
registerServiceWorker();
