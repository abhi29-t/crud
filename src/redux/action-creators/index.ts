import { Dispatch } from "redux";

export const someAction = () => {
  return async (dispatch: Dispatch<any>) => {
    setTimeout(() => {
      dispatch({ type: "SomeType" });
    }, 1500);
  };
};
