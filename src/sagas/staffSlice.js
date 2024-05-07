import {  call,put } from "redux-saga/effects";
import { createModule } from "saga-slice";
import { DATABASE_STAFF_PAGE } from "../routes/routeConstants";
import { staff,staffFetch } from "../services/staffService";

const staffSlice = createModule({
  name: "staff",
  initialState: {
    locations: [],
    loading: false,
    error: null,
  },
  reducers: {
    staff: (state) => {
      state.loading = true;
    },
    stafffetch: (state) => {
      state.loading = true;
    },
    staffSuccess: (state, payload) => {
      state.staffs = payload.body;
    },
    finishFetching: (state) => {
      state.loading = false;
    },
    fetchError: (state) => {
      state.loading = false;
      state.error = "An error occured";
    },
  },
  
  sagas: (A) => ({
    
    *[A.staff]({ payload: { query, history }}) {
      try {
        const { data } = yield staff(query);
        yield put(A.finishFetching());
        history(DATABASE_STAFF_PAGE);
      } catch (e) {
        console.log(e);
        yield put(A.finishFetching());
        yield put(A.fetchError());
      }
    },
    *[A.stafffetch]({ payload }) {
      try {
        const { data } = yield staffFetch();
        yield put(A.finishFetching());
        yield put(A.staffSuccess(data));
        if (payload && payload.onSuccess) {
          yield call(payload.onSuccess, data);
        }
        console.log("Fetched Staff:", data);




      } catch (e) {
        console.log(e);
        yield put(A.finishFetching());
        yield put(A.fetchError());
      }
    },
    
  }),
});

export default staffSlice;
export const staffActions = staffSlice.actions;