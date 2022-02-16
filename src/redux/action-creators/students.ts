import { Dispatch } from "redux";

// AXIOS API
import LocalhostApi from "../../apis";

// IMPORT ACTION TYPES
import { ActionType } from "../types/action-types";
import { StudentsAction as Action } from "../types/actions";

export const fetch_studentsData = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.FETCH_STUDENTS_LIST,
  });
  try {
    const { data } = await LocalhostApi.get("/mock/students_data.json");
    setTimeout(() => {
      dispatch({
        type: ActionType.FETCH_STUDENTS_LIST_SUCCESS,
        payload: data,
      });
    }, 2000);
  } catch (error: any) {
    dispatch({
      type: ActionType.FETCH_STUDENTS_LIST_ERROR,
      payload: error.message,
    });
  }
};
