import { Student } from "../../../Types/students";
import { ActionType } from "../action-types";

// FETCH ---------------------------------------------------------
export interface FetchStudentsList {
  type: ActionType.FETCH_STUDENTS_LIST;
}
export interface FetchStudentsListSuccess {
  type: ActionType.FETCH_STUDENTS_LIST_SUCCESS;
  payload: Student[];
  totalStudents: number;
}
export interface FetchStudentsListError {
  type: ActionType.FETCH_STUDENTS_LIST_ERROR;
  payload: string;
}

// GET ---------------------------------------------------------
export interface GetStudentDetails {
  type: ActionType.GET_STUDENT_DETAILS;
}
export interface GetStudentDetailsSuccess {
  type: ActionType.GET_STUDENT_DETAILS_SUCCESS;
  payload: Student;
  totalStudents: number;
}
export interface GetStudentDetailsError {
  type: ActionType.GET_STUDENT_DETAILS_ERROR;
  payload: string;
}

// ADD ---------------------------------------------------------
export interface AddStudent {
  type: ActionType.ADD_STUDENT;
}
export interface AddStudentSuccess {
  type: ActionType.ADD_STUDENT_SUCCESS;
  payload: Student;
}

// REMOVE ---------------------------------------------------------
export interface RemoveStudent {
  type: ActionType.REMOVE_STUDENT;
}
export interface RemoveStudentSuccess {
  type: ActionType.REMOVE_STUDENT_SUCCESS;
  payload: number;
}

// UPDATE ---------------------------------------------------------
export interface UpdateStudentDetails {
  type: ActionType.UPDATE_STUDENT_DETAILS;
}
export interface UpdateStudentDetailsSuccess {
  type: ActionType.UPDATE_STUDENT_DETAILS_SUCCESS;
  payload: Student;
}

export type StudentsAction =
  // FETCH
  | FetchStudentsList
  | FetchStudentsListSuccess
  | FetchStudentsListError
  // GET
  | GetStudentDetails
  | GetStudentDetailsSuccess
  | GetStudentDetailsError
  // ADD
  | AddStudent
  | AddStudentSuccess
  // REMOVE
  | RemoveStudent
  | RemoveStudentSuccess
  // UPDATE
  | UpdateStudentDetails
  | UpdateStudentDetailsSuccess;
