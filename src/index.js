import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
