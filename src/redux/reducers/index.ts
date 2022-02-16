import { combineReducers } from "redux";

export const reducers = combineReducers({
  removeMe: () => "Dummy Reducer",
});

export type RootState = ReturnType<typeof reducers>;
