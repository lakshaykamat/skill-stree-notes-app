"use client";
import { NOTE_DATA } from "@/app/data";
import { getLocalStorageItem, setLocalStorageItem } from "@/lib/utils";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
if (getLocalStorageItem("noteData") == null) {
  console.log("Running");
  setLocalStorageItem("noteData", NOTE_DATA);
}
console.log(localStorage.getItem("noteData"));
const initialState: { notes: NoteType[] } = {
  notes: getLocalStorageItem("noteData"),
};

const reducerFunction = {
  addNote: (state: any, action: PayloadAction<NoteType>) => {
    const note = action.payload;

    //Replacing the note with the previous one
    const newArr = state.notes.map((obj: NoteType) =>
      obj.id === note.id ? note : obj
    );

    //updating local storage and global state
    setLocalStorageItem("noteData", newArr);
    state.notes = newArr;
  },
  removeNote: (state: any, action: PayloadAction<number | string>) =>
    (state.notes = state.notes.filter(
      (note: NoteType) => note.id !== action.payload
    )),
};
export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: reducerFunction.addNote,
    removeNote: reducerFunction.removeNote,
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
