import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers/index';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
