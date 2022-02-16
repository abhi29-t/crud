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
  const { data } = await LocalhostApi.get("/mock/students_data.json");
  dispatch({
    type: ActionType.FETCH_STUDENTS_LIST,
  });
};
