import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import userSlice from '../sagas/userSlice';
import dataSlice from '../sagas/dataSlice';
import discountSlice from '../sagas/discountSlice';

import appReducer from './reducers';
import appSaga from './sagas';
import { rootSaga } from 'saga-slice';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const modules = [userSlice, dataSlice, discountSlice];


const store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga(modules));
sagaMiddleware.run(appSaga);

export default store;