import { createStore, combineReducers } from "redux";
import notes from "./reducers/notes";

const rootReducer = combineReducers({ notes });
export const store = createStore(rootReducer);
console.log(store.getState());
