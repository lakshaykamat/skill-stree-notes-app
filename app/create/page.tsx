"use client";
import Tiptap from "@/components/Tiptap";
import { useState } from "react";

type Props = {};

const CreateNotePage = (props: Props) => {
  const [editorState, setEditorState] = useState({
    title: "Untitled",
    content: "",
  });
  return (
    <div>
      <input
        placeholder="Untitled"
        value={editorState.title}
        className="border-b-2 mb-6 p-2 dark:bg-inherit focus:outline-none text-xl"
        onChange={(e) =>
          setEditorState({ ...editorState, title: e.target.value })
        }
      />
      <div className="prose dark:prose-invert w-full">
        <Tiptap title={editorState.title} />
      </div>
    </div>
  );
};

export default CreateNotePage;
