import { ActionType } from "../types/action-types";

const initialState = {
  loading: false,
  error: null,
  studentsData: [],
};

export const studentsDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.FETCH_STUDENTS_LIST:
      return {
        loading: true,
        error: null,
        studentsData: [],
      };
    case ActionType.FETCH_STUDENTS_LIST_SUCCESS:
      return {
        loading: false,
        error: null,
        studentsData: action.payload,
      };
    case ActionType.FETCH_STUDENTS_LIST_ERROR:
      return {
        loading: false,
        error: action.payload,
        studentsData: [],
      };

    default:
      return state;
  }
};
