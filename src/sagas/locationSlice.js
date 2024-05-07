import {  call,put } from "redux-saga/effects";
import { createModule } from "saga-slice";
import { DATABASE_LOCATION_PAGE } from "../routes/routeConstants";
import { location,locationFetch } from "../services/locationService";

const locationSlice = createModule({
  name: "location",
  initialState: {
    locations: [],
    loading: false,
    error: null,
  },
  reducers: {
    location: (state) => {
      state.loading = true;
    },
    locationfetch: (state) => {
      state.loading = true;
    },
    locationSuccess: (state, payload) => {
      state.locations = payload.body;
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
    
    *[A.location]({ payload: { query, history }}) {
      try {
        const { data } = yield location(query);
        yield put(A.finishFetching());
        history(DATABASE_LOCATION_PAGE);
      } catch (e) {
        console.log(e);
        yield put(A.finishFetching());
        yield put(A.fetchError());
      }
    },
    *[A.locationfetch]({ payload }) {
      try {
        const { data } = yield locationFetch();
        yield put(A.finishFetching());
        yield put(A.locationSuccess(data));
        if (payload && payload.onSuccess) {
          yield call(payload.onSuccess, data);
        }
        console.log("Fetched location:", data);
      } catch (e) {
        console.log(e);
        yield put(A.finishFetching());
        yield put(A.fetchError());
      }
    },
    
  }),
});

export default locationSlice;
export const locationActions = locationSlice.actions;