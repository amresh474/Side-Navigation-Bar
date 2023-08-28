import rootReducer from "../reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
const middleware = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleware));