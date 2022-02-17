import { Student } from "../../../Types/students";
import { ActionType } from "../action-types";

export interface FetchStudentsList {
  type: ActionType.FETCH_STUDENTS_LIST;
}

export interface FetchStudentsListSuccess {
  type: ActionType.FETCH_STUDENTS_LIST_SUCCESS;
  payload: Student[];
}

export interface FetchStudentsListError {
  type: ActionType.FETCH_STUDENTS_LIST_ERROR;
  payload: string;
}

export interface GetStudentDetails {
  type: ActionType.GET_STUDENT_DETAILS;
}

export interface GetStudentDetailsSuccess {
  type: ActionType.GET_STUDENT_DETAILS_SUCCESS;
  payload: Student;
}

export interface GetStudentDetailsError {
  type: ActionType.GET_STUDENT_DETAILS_ERROR;
  payload: string;
}

export type StudentsAction =
  | FetchStudentsList
  | FetchStudentsListSuccess
  | FetchStudentsListError
  | GetStudentDetails
  | GetStudentDetailsSuccess
  | GetStudentDetailsError;
