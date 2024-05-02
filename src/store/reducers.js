import { rootReducer } from 'saga-slice';

// Front
import Layout from './layout/reducer';
import Forget from './auth/forgetpwd/reducer';
import userSlice from '../sagas/userSlice';
import dataSlice from '../sagas/dataSlice';

const modules = [userSlice, dataSlice ];

const appReducer = rootReducer(modules, {
    // public
    Layout,
    Forget,
});

export default appReducer;