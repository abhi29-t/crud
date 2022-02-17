import { Student } from "../../Types/students";
import { ActionType } from "../types/action-types";
import { StudentsAction } from "../types/actions";

type StudentsState = {
  loading: boolean;
  error: null | string;
  studentsData: Student[];
  selectedStudent: Student | null;
  totalStudents: number;
};

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
    case ActionType.FETCH_STUDENTS_LIST:
      return {
        ...state,
        loading: true,
        error: null,
        studentsData: [],
        totalStudents: 0,
      };
    case ActionType.FETCH_STUDENTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        studentsData: action.payload,
        totalStudents: action.payload.length,
      };
    case ActionType.FETCH_STUDENTS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        studentsData: [],
        totalStudents: 0,
      };
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
