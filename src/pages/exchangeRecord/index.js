import { combineReducers } from 'redux';

import view from './views/exchangeRecord';
import * as reducers from './reducer';

const reducer = combineReducers(reducers);

export { view, reducer }