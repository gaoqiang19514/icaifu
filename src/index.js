import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';


import 'normalize.css'
import './index.scss';

import store from './Store.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
