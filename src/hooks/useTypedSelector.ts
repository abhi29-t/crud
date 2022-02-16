import { TypedUseSelectorHook, useSelector } from "react-redux";

// COMPONENT
import { RootState } from "../redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
