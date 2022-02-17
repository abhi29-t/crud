import { Student } from "../../Types/students";
import { ActionType } from "../types/action-types";
import { StudentsAction } from "../types/actions";
import { StudentsState } from "../types/initial-states-type";

const initialState: StudentsState = {
  loading: false,
  error: null,
  selectedStudent: {
    id: 1,
    birth_year: 2000,
    email: "",
    first_name: "",
    gender: "",
    image: "",
    last_name: "",
    sports_person: false,
  },
  studentsData: [] as Student[],
  totalStudents: 0,
};

export const studentsDataReducer = (
  state: StudentsState = initialState,
  action: StudentsAction
) => {
  switch (action.type) {
    // GET STUDENTS DATA
    case ActionType.FETCH_STUDENTS_LIST:
      return {
        ...state,
        loading: true,
        error: null,
        totalStudents: 0,
      };
    case ActionType.FETCH_STUDENTS_LIST_SUCCESS:
      console.log("redux", state.studentsData, action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        studentsData: [...state.studentsData, ...action.payload],
        totalStudents: action.totalStudents,
      };
    case ActionType.FETCH_STUDENTS_LIST_ERROR:
      console.log("error");
      return {
        ...state,
        loading: false,
        error: action.payload,
        studentsData: [],
        totalStudents: 0,
      };

    // GET DATA FOR SELECTED STUDENT ID
    case ActionType.GET_STUDENT_DETAILS:
      return {
        ...state,
        loading: true,
        error: null,
        selectedStudent: null,
      };
    case ActionType.GET_STUDENT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        selectedStudent: action.payload,
      };
    case ActionType.GET_STUDENT_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        selectedStudent: null,
      };

    default:
      return state;
  }
};
