import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import appReducer from './reducers';
import panneSlice from '../modules/panne/saga/panneSlice';
import userSlice from './auth/login/userSlice';
import { rootSaga } from 'saga-slice';
import appSaga from './sagas';
import empSlice from '../modules/panne/saga/empSlice';
import stationSlice from '../modules/panne/saga/stationSlice';
import localiteSlice from '../modules/panne/saga/localiteSlice';
import deptSlice from '../modules/panne/saga/deptSlice';
import equipeSlice from '../modules/panne/saga/equipeSlice';
import nationaliteSlice from '../modules/panne/saga/nationaliteSlice';

import categorieSlice from '../modules/panne/saga/categorieSlice';
import equipementSlice from '../modules/panne/saga/equipmSlice';

import dataSlice from '../modules/panne/saga/dataSlice';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const modules = [ equipementSlice,categorieSlice ,panneSlice,userSlice,empSlice, stationSlice, localiteSlice, deptSlice, equipeSlice, nationaliteSlice, dataSlice ];


const store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga(modules));
sagaMiddleware.run(appSaga);

export default store;