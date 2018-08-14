import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import 'normalize.css';
import './index.scss';

import store from './Store.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { view as ScrollToTop } from '@/common/scrollToTop';

ReactDOM.render(
	<HashRouter>
        <ScrollToTop>
            <Provider store={ store }>
                <App />
            </Provider>
        </ScrollToTop>
	</HashRouter>
	, document.getElementById('root'));
registerServiceWorker();
