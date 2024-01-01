import { Editor } from "@tiptap/react";

const EditorMenu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  return (
    <div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`px-4 py-2 rounded ${
          editor.isActive("bold") ? "bg-gray-200" : "bg-gray-500"
        } ${
          !editor.can().chain().focus().toggleItalic().run() && "opacity-70"
        }`}
      >
        Bold
      </button>
    </div>
  );
};

export default EditorMenu;
