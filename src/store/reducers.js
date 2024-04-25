
// Front
import Layout from './layout/reducer';

// Authentication Module
import Forget from './auth/forgetpwd/reducer';
import panneSlice from '../modules/panne/saga/panneSlice';
import { rootReducer } from 'saga-slice';
import userSlice from './auth/login/userSlice';
import empSlice from '../modules/panne/saga/empSlice';
import stationSlice from '../modules/panne/saga/stationSlice';
import localiteSlice from '../modules/panne/saga/localiteSlice';
import deptSlice from '../modules/panne/saga/deptSlice';
import equipeSlice from '../modules/panne/saga/equipeSlice';
import nationaliteSlice from '../modules/panne/saga/nationaliteSlice';
import dataSlice from '../modules/panne/saga/dataSlice';
import equipementSlice from '../modules/panne/saga/equipmSlice';
import categorieSlice from '../modules/panne/saga/categorieSlice';

const modules = [equipementSlice, categorieSlice, panneSlice,userSlice, empSlice, stationSlice, localiteSlice, deptSlice, equipeSlice, nationaliteSlice, dataSlice ];

const appReducer = rootReducer(modules, {
    // public
    Layout,
    Forget,
});


export default appReducer;