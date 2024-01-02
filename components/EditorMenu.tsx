import {
  FontBoldIcon,
  HeadingIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";
import { Editor } from "@tiptap/react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic } from "lucide-react";

const EditorMenu = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className=" flex">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FontBoldIcon />
          </button>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FontItalicIcon />
          </button>
        </ToggleGroupItem>
        <ToggleGroupItem value="heading1">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            <HeadingIcon />
          </button>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default EditorMenu;
