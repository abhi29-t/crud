import { ActionType } from "../action-types";

export interface FetchStudentsList {
  type: ActionType.FETCH_STUDENTS_LIST;
}

export interface FetchStudentsListSuccess {
  type: ActionType.FETCH_STUDENTS_LIST_SUCCESS;
  payload: {}[];
}

export interface FetchStudentsListError {
  type: ActionType.FETCH_STUDENTS_LIST_ERROR;
  payload: string;
}

export type StudentsAction =
  | FetchStudentsList
  | FetchStudentsListSuccess
  | FetchStudentsListError;
