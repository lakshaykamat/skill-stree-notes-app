"use client";
import Tiptap from "@/components/Tiptap";
import { useState } from "react";

type Props = {};

const CreateNotePage = (props: Props) => {
  const [editorState, setEditorState] = useState({ title: "", content: "" });
  return (
    <div>
      <input
        placeholder="Untitled"
        className="border-b-2 focus:outline-none text-xl"
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
