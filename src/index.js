// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// // import Routes from './Routes';
// import { browserHistory } from 'react-router';
//
// //ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<Root history={browserHistory} />, document.getElementById('root'));




import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './Root';
import './index.scss';

// Render the main component into the dom
ReactDOM.render(<Root history={browserHistory} />, document.getElementById('app'));
