import { rootReducer } from 'saga-slice';

// Front
import Layout from './layout/reducer';
import Forget from './auth/forgetpwd/reducer';
import userSlice from '../sagas/userSlice';
import dataSlice from '../sagas/dataSlice';
import locationSlice from '../sagas/locationSlice';


const modules = [userSlice, dataSlice,locationSlice ];

const appReducer = rootReducer(modules, {
    // public
    Layout,
    Forget,
});

export default appReducer;