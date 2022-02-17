import { Dispatch } from "redux";

// AXIOS API
import LocalhostApi from "../../apis";
import { Student } from "../../Types/students";

// IMPORT ACTION TYPES
import { ActionType } from "../types/action-types";
import { StudentsAction as Action } from "../types/actions";
import { StudentsState } from "../types/initial-states-type";

// Fetching entire students record on first load
export const fetch_studentsData =
  (currentPage: number, limit: number) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_STUDENTS_LIST,
    });
    try {
      const { data } = await LocalhostApi.get("/mock/students_data.json");
      console.log("request", limit * currentPage, limit * (currentPage + 1));
      console.log(
        "response",
        data.slice(limit * currentPage, limit * (currentPage + 1))
      );
      setTimeout(() => {
        dispatch({
          type: ActionType.FETCH_STUDENTS_LIST_SUCCESS,
          payload: data.slice(limit * currentPage, limit * (currentPage + 1)),
          totalStudents: data.length,
        });
      }, 1500);
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_STUDENTS_LIST_ERROR,
        payload: error.message,
      });
    }
  };
