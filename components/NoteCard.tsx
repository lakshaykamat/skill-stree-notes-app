"use client";
import { cn, truncateText } from "@/lib/utils";
import { Heading3, Paragraph } from "./Typography";
import { useDispatch } from "react-redux";
import { Card } from "./ui/card";
import { convert } from "html-to-text";
import { Button } from "./ui/button";
import { ArchiveIcon, TrashIcon } from "@radix-ui/react-icons";
import { AppDispatch } from "@/app/redux/store";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { removeNote, updateNote } from "@/app/redux/note-slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Delete, Trash, Trash2 } from "lucide-react";

type Props = {
  note: NoteType;
};

const NoteCard = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const textContent = convert(truncateText(props.note.text, 30));
  const archiveNote = async () => {
    const note: NoteType = { ...props.note, isArchive: !props.note.isArchive };
    dispatch(updateNote(note));
    console.log(window.location.href);
    const a =
      window.location.href === "http://localhost:3000/archives"
        ? window.location.href.replace("/archives", `/`)
        : window.location.href.replace("3000/", "3000/archives");
    router.replace(a);
  };
  const deleteNote = async () => {
    const note: NoteType = { ...props.note };
    dispatch(removeNote(note.id));
    router.push(`/`);
  };

  return (
    <Card
      className={cn(
        "transition-all cursor-pointer p-4",
        `hover:bg-[${props.note.color.dark}] dark:bg-[${props.note.color.dark}] bg-[${props.note.color.light}]`
      )}
    >
      <Link key={props.note.id} href={`/note/${props.note.id}`}>
        <Heading3>
          <span className="hover:underline">{props.note.title}</span>
        </Heading3>
      </Link>
      <Paragraph>{textContent}</Paragraph>
      <div className="mt-5">
        <TooltipProvider delayDuration={900}>
          <Tooltip>
            <TooltipTrigger>
              <Button onClick={archiveNote} size={"icon"} variant={"ghost"}>
                <ArchiveIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Archive note</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={900}>
          <Tooltip>
            <TooltipTrigger>
              <Button
                onClick={deleteNote}
                size={"icon"}
                variant={"ghost"}
                className="hover:bg-destructive hover:text-destructive-foreground"
              >
                <TrashIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete note</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  );
};

export default NoteCard;
