import { Editor } from "@tiptap/react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, limit: number): string {
  const words = text.split(" ");

  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }

  return text;
}
export const getNoteById = (id: string) => {
  return (
    getLocalStorageItem("noteData").find((note: NoteType) => note.id === id) ||
    null
  );
};
export async function saveNote(editor: Editor | null, current_note: NoteType) {
  if (!editor) return;
  const note = {
    ...current_note,
    text: editor.getHTML(),
  };
  const existingNotes = getLocalStorageItem("noteData"); //fetching current notes
  //deleting current note from array and adding new object of array with same properties just replacing the text
  //TODO add redux
  const updatedNotes = [
    ...existingNotes.filter((note: NoteType) => note.id !== current_note.id),
    note,
  ];
  return setLocalStorageItem("noteData", updatedNotes);
}

export const setLocalStorageItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Error setting local storage:", error);
    return false;
  }
};

export const getLocalStorageItem = (key: string) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error("Error getting local storage:", error);
    return null;
  }
};

export const removeLocalStorageItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing local storage item:", error);
  }
};
