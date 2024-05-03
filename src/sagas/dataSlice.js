import { call, put } from "redux-saga/effects";
import { createModule } from "saga-slice";
import { loadData } from "../services/dataService";

const dataSlice = createModule({
    name: "data",
    initialState: {
        depts: [],
        station:[],
        equipe:[],
        employee:[],
        localite:[],
        equipement:[],
        categorie:[],
        nationalite:[],
        isFetching: false,
        error: null
    },
    reducers: {
        loadData: (state) => {
            state.isFetching = true;
        },
        fetchedData: (state, payload) => {
            state.depts = payload.body.depts;
            state.station = payload.body.station;
            state.equipe = payload.body.equipe;
            state.employee = payload.body.employee;
            state.equipement = payload.body.equipement;
            state.categorie = payload.body.categorie;
            state.nationalite = payload.body.nationalite;
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
