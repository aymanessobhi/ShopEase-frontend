import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import userSlice from '../sagas/userSlice';
import dataSlice from '../sagas/dataSlice';
import locationSlice from '../sagas/locationSlice';
import countrySlice from '../sagas/countrySlice';
import staffSlice from '../sagas/staffSlice';



import appReducer from './reducers';
import appSaga from './sagas';
import { rootSaga } from 'saga-slice';

// import dataSlice from '../modules/panne/saga/dataSlice';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const modules = [userSlice,locationSlice, dataSlice ,countrySlice ,staffSlice];


const store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga(modules));
sagaMiddleware.run(appSaga);

export default store;