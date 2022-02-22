import { Dispatch } from "redux";

// AXIOS API
import LocalhostApi from "../../apis";
import { Student } from "../../Types/students";

// IMPORT ACTION TYPES
import { ActionType } from "../types/action-types";
import { StudentsAction as Action } from "../types/actions";
import { StudentsState } from "../types/initial-states-type";

// Fetching entire students record on first load
export const fetch_studentsData = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.FETCH_STUDENTS_LIST,
  });
  try {
    const { data } = await LocalhostApi.get("/mock/students_data.json");

    setTimeout(() => {
      dispatch({
        type: ActionType.FETCH_STUDENTS_LIST_SUCCESS,
        payload: data.slice(0, 9),
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

export const add_student =
  (inputs: Student) => async (dispatch: Dispatch, state: any) => {
    dispatch({
      type: ActionType.ADD_STUDENT,
    });
    const studentsList = state().studentsRecord.studentsData;
    const lastID = studentsList[studentsList.length - 1].id;
    setTimeout(
      () =>
        dispatch({
          type: ActionType.ADD_STUDENT_SUCCESS,
          payload: {
            ...inputs,
            id: lastID + 1,
          },
        }),
      1500
    );
  };

export const update_studentDetails =
  (inputs: Student) => async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.UPDATE_STUDENT_DETAILS,
    });

    setTimeout(
      () =>
        dispatch({
          type: ActionType.UPDATE_STUDENT_DETAILS_SUCCESS,
          payload: inputs,
        }),
      1500
    );
  };

export const remove_student = (id: number) => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.REMOVE_STUDENT,
  });

  setTimeout(
    () =>
      dispatch({
        type: ActionType.REMOVE_STUDENT_SUCCESS,
        payload: id,
      }),
    1500
  );
};
