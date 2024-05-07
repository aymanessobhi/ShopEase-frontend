import {  call,put } from "redux-saga/effects";
import { createModule } from "saga-slice";
import { countryFetch } from "../services/countryService";

const countrySlice = createModule({
  name: "country",
  initialState: {
    countries: [],
    loading: false,
    error: null,
  },
  reducers: {
    country: (state) => {
      state.loading = true;
    },
    countryfetch: (state, payload) => {
      state.loading = true;
      state.countries = payload;

    },
    countrySuccess: (state, payload) => {
      state.countries = payload.body;
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
    
    *[A.countryfetch]({ payload }) {
      try {
        const { data } = yield countryFetch();
        yield put(A.finishFetching());
        yield put(A.countrySuccess(data));
        console.log('datatat',data);
        if (payload && payload.onSuccess) {
          yield call(payload.onSuccess, data);
        }
        console.log("Fetched country:", data);
      } catch (e) {
        console.log(e);
        yield put(A.finishFetching());
        yield put(A.fetchError());
      }
    },
    
  }),
});

export default countrySlice;
export const countryActions = countrySlice.actions;