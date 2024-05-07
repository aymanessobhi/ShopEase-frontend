import { rootReducer } from 'saga-slice';

// Front
import Layout from './layout/reducer';
import Forget from './auth/forgetpwd/reducer';
import userSlice from '../sagas/userSlice';
import dataSlice from '../sagas/dataSlice';
import discountSlice from '../sagas/discountSlice';

const modules = [userSlice, dataSlice, discountSlice ];

const appReducer = rootReducer(modules, {
    // public
    Layout,
    Forget,
});

export default appReducer;