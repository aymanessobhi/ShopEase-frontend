import { rootReducer } from 'saga-slice';

// Front
import Layout from './layout/reducer';
import Forget from './auth/forgetpwd/reducer';
import userSlice from '../sagas/userSlice';
import dataSlice from '../sagas/dataSlice';
import locationSlice from '../sagas/locationSlice';
import countrySlice from '../sagas/countrySlice';
import staffSlice from '../sagas/staffSlice';




const modules = [userSlice, dataSlice,locationSlice,countrySlice,staffSlice ];

const appReducer = rootReducer(modules, {
    // public
    Layout,
    Forget,
});

export default appReducer;