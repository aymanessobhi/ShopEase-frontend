import { createModule } from "saga-slice";
import { call, put } from "redux-saga/effects";
import { create, list, update, deleteDis, find } from "../services/discountService";

const discountSlice = createModule({
    name: "discount",
    initialState: {
        discounts: [],
        isFetching: false,
        error: null
    },
    reducers: {
        list: (state) => {
            state.isFetching = true;
        },
        create: (state) => {
            state.isFetching = true;
        },
        delete: (state) => {
            state.isFetching = true;
        },
        update: (state) => {
            state.isFetching = true;
        },
        find: (state) => {
            state.isFetching = true;
        },
        fetchedData: (state, payload) => {
            state.discounts = payload.body;
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
        *[A.create]({payload}) {
            try {
                yield create(payload.data);
                yield put(A.finishFetching());
                yield call(payload.onSuccess);
            } catch (e) {
                console.log(e);
                yield put(A.finishFetching());
                yield put(A.fetchError());
            }
        },
        *[A.list]() {
            try {
                const { data } = yield list();
                yield put(A.finishFetching());
                yield put(A.fetchedData(data));
            } catch (e) {
                console.log(e);
                yield put(A.finishFetching());
                yield put(A.fetchError());
            }
        },
        *[A.delete]({payload}) {
            try {
                yield deleteDis(payload.id);
                yield put(A.finishFetching());
                yield call(payload.onSuccess);
            } catch (e) {
                console.log(e);
                yield put(A.finishFetching());
                yield put(A.fetchError());
            }
        },
        *[A.update]({payload}) {
            try {
                yield update(payload.data);
                yield put(A.finishFetching());
                yield call(payload.onSuccess);
            } catch (e) {
                console.log(e);
                yield put(A.finishFetching());
                yield put(A.fetchError());
            }
        },
        *[A.find]({payload}) {
            try {
                const {data} = yield find(payload.id);
                yield put(A.finishFetching());
                yield call(payload.onSuccess, data.body);
            } catch (e) {
                console.log(e);
                yield put(A.finishFetching());
                yield put(A.fetchError());
            }
        },
    })
})

export default discountSlice;
export const discountActions = discountSlice.actions;
 