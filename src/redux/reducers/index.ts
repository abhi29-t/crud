import { combineReducers } from "redux";

// Reducers
import { studentsDataReducer } from "./students";

export const reducers = combineReducers({
  studentsRecord: studentsDataReducer,
});

export type RootState = ReturnType<typeof reducers>;
