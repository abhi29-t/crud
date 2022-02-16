import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// Components
import { reducers } from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
