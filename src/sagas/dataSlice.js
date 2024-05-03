import { call, put } from "redux-saga/effects";
import { createModule } from "saga-slice";
import { loadData } from "../services/dataService";

const dataSlice = createModule({
    name: "data",
    initialState: {
        appliesTo: [],
        customerEligib: [],
        discountMethods: [],
        discMinP: [],
        discStatus: [],
        discTypes: [],
        discountValues: [],
        prodStatus: [],
        saleStatus: [],
        units: [],
        countries: [],
        isFetching: false,
        error: null
    },
    reducers: {
        loadData: (state) => {
            state.isFetching = true;
        },
        fetchedData: (state, payload) => {
            state.appliesTo = payload.body.appliesTo;
            state.customerEligib = payload.body.customerEligib;
            state.discountMethods = payload.body.discountMethods;
            state.discMinP = payload.body.discMinP;
            state.discStatus = payload.body.discStatus;
            state.discTypes = payload.body.discTypes;
            state.discountValues = payload.body.discountValues;
            state.prodStatus = payload.body.prodStatus;
            state.saleStatus = payload.body.saleStatus;
            state.units = payload.body.units;
            state.countries = payload.body.countries;
        },
        finishFetching: (state) => {
            state.isFetching = false;
        },
        fetchError: (state) => {
            state.isFetching = false;
            state.error = "An error occured";
        },
    },
    sagas: (A) => ({
        *[A.loadData]({ payload }) {
            try {
                const { data } = yield loadData();
                yield put(A.finishFetching());
                yield put(A.fetchedData(data));
            } catch (e) {
                console.log(e);
                yield put(A.finishFetching());
                yield put(A.fetchError());
            }
        },
    })
})

export default dataSlice;
export const dataActions = dataSlice.actions;
