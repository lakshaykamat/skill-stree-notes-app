"use client";
import { NOTE_DATA } from "@/app/data";
import { getLocalStorageItem, setLocalStorageItem } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

if (typeof window !== "undefined") {
  if (getLocalStorageItem("noteData") == null) {
    setLocalStorageItem("noteData", NOTE_DATA);
  }
}

const initialState: { notes: NoteType[] } = {
  notes: typeof window !== "undefined" && getLocalStorageItem("noteData"),
};

const reducerFunction = {
  addNote: (state: any, action: PayloadAction<NoteType>) => {
    const note = action.payload;

    //Replacing the note with the previous one
    const newArr = state.notes.map((obj: NoteType) =>
      obj.id === note.id ? note : obj
    );

    //updating local storage and global state
    typeof window !== "undefined" && setLocalStorageItem("noteData", newArr);
    state.notes = newArr;
  },
  createNote: (state: any, action: PayloadAction<NoteType>) => {
    const note = action.payload;

    //Replacing the note with the previous one
    state.notes.push(note);

    //updating local storage and global state
    typeof window !== "undefined" &&
      setLocalStorageItem("noteData", state.notes);
  },
  removeNote: (state: any, action: PayloadAction<number | string>) => {
    const updatedNotes = state.notes.filter(
      (note: NoteType) => note.id !== action.payload
    );
    typeof window !== "undefined" &&
      setLocalStorageItem("noteData", updatedNotes);
    state.notes = updatedNotes;
  },
  updateNote: (state: any, action: PayloadAction<NoteType>) => {
    const note = action.payload;

    //Replacing the note with the previous one
    const newArr = state.notes.map((obj: NoteType) =>
      obj.id === note.id ? note : obj
    );

    //updating local storage and global state
    typeof window !== "undefined" && setLocalStorageItem("noteData", newArr);
    state.notes = newArr;
  },
  clearStore: (state: any) => {
    typeof window !== "undefined" && setLocalStorageItem("noteData", []);
    state.notes = [];
  },
  sampleData: (state: any) => {
    typeof window !== "undefined" && setLocalStorageItem("noteData", NOTE_DATA);
    state.notes = NOTE_DATA;
  },
};
export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: reducerFunction.addNote,
    removeNote: reducerFunction.removeNote,
    updateNote: reducerFunction.updateNote,
    createNote: reducerFunction.createNote,
    clearStore: reducerFunction.clearStore,
    sampleData: reducerFunction.sampleData,
  },
});

export const {
  addNote,
  removeNote,
  updateNote,
  createNote,
  clearStore,
  sampleData,
} = noteSlice.actions;
export default noteSlice.reducer;
