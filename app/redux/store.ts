import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import noteReducer from "./note-slice";

export const STORE = configureStore({
  reducer: { noteReducer },
});

export type RootState = ReturnType<typeof STORE.getState>;
export type AppDispatch = typeof STORE.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default STORE;
