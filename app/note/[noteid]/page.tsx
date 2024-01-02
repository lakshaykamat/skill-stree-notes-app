"use client";
import { useAppSelector } from "@/app/redux/store";
import Tiptap from "@/components/Tiptap";
import { Heading1, Heading2, Small } from "@/components/Typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Save } from "lucide-react";
import { useState } from "react";

const NotePage = ({ params }: { params: { noteid: string } }) => {
  const { noteid } = params;
  const [isEditing, setIsEditing] = useState(false);
  // const note = getNoteById(Number(noteid));
  const notes = useAppSelector((state) => state.noteReducer.notes);
  const note = notes.find((note: NoteType) => note.id == noteid) || null;

  if (!note)
    return (
      <>
        <div className="flex flex-col items-start gap-3 justify-start">
          <div>
            <Heading1>Note not found :/</Heading1>
            <Small>Go back to home</Small>
          </div>
          <Button>Home</Button>
        </div>
      </>
    );
  return (
    <div className="">
      <div className="flex flex-col justify-start items-start">
        <div className="flex gap-6 items-center">
          <Heading2>{note.title}</Heading2>
          {isEditing && <Badge variant={"secondary"}>Editing</Badge>}
        </div>

        {!isEditing && (
          <Button
            disabled={isEditing}
            className="mb-12"
            onClick={() => {
              //  document.getElementById("editor").focus();
              setIsEditing(!isEditing);
            }}
          >
            <Edit className="mr-2 w-5 h-5" /> <span>Edit</span>
          </Button>
        )}
      </div>
      {isEditing ? (
        <div className="prose dark:prose-invert">
          <Tiptap
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            current_note={note}
          />
        </div>
      ) : (
        <section
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: note.text }}
        />
      )}
    </div>
  );
};

export default NotePage;
