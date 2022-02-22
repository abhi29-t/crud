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
      return {
        ...state,
        loading: false,
        error: null,
        studentsData: action.payload,
        totalStudents: action.totalStudents,
      };
    case ActionType.FETCH_STUDENTS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        studentsData: [],
        totalStudents: 0,
      };

    // ADD STUDENT
    case ActionType.ADD_STUDENT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.ADD_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        studentsData: [...state.studentsData, action.payload],
      };

    // UPDATE STUDENT DETAILS
    case ActionType.UPDATE_STUDENT_DETAILS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.UPDATE_STUDENT_DETAILS_SUCCESS:
      const updatedList = state.studentsData.map((student) => {
        if (student.id === action.payload.id) {
          return action.payload;
        }
        return student;
      });
      return {
        ...state,
        loading: false,
        error: null,
        studentsData: updatedList,
      };

    // REMOVE STUDENT DETAILS
    case ActionType.REMOVE_STUDENT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.REMOVE_STUDENT_SUCCESS:
      const remainingStudents = state.studentsData.filter(
        (student) => student.id !== action.payload
      );
      return {
        ...state,
        loading: false,
        error: null,
        studentsData: remainingStudents,
      };
    default:
      return state;
  }
};
