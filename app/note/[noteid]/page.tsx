"use client";
import Tiptap from "@/components/Tiptap";
import { Heading1, Heading3, Paragraph, Small } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { getLocalStorageItem, getNoteById } from "@/lib/utils";
import { Edit, Save } from "lucide-react";
import { useState } from "react";

type Props = {};

const NotePage = ({ params }: { params: { noteid: string } }) => {
  const { noteid } = params;
  const [isEditing, setIsEditing] = useState(false);
  const note = getNoteById(Number(noteid));

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
      <div className="flex justify-start gap-6">
        {/* <Heading1>{note.date}</Heading1> */}
        <Button disabled={isEditing} onClick={() => setIsEditing(!isEditing)}>
          <Edit className="mr-2 w-5 h-5" /> <span>Edit</span>
        </Button>
        <Button disabled={!isEditing}>
          <Save className="mr-2 w-5 h-5" /> Save
        </Button>
      </div>
      {isEditing ? (
        <div className="prose dark:prose-invert w-full">
          <Tiptap current_note={note} data={note.text} />
        </div>
      ) : (
        <section
          className="prose dark:prose-invert mx-auto"
          dangerouslySetInnerHTML={{ __html: note.text }}
        />
      )}
    </div>
  );
};

export default NotePage;
