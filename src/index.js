import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import 'normalize.css';
import './index.scss';

import store from './Store.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { view as ScrollToTop } from '@/common/scrollToTop';

ReactDOM.render(
	<BrowserRouter>
        <ScrollToTop>
            <Provider store={store}>
                <App />
            </Provider>
        </ScrollToTop>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
