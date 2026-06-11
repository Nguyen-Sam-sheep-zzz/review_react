import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/userSaga";

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Tạo store với middleware
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

// Chạy root saga
sagaMiddleware.run(rootSaga);

export default store;