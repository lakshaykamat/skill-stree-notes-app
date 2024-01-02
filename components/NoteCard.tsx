"use client";
import { truncateText } from "@/lib/utils";
import { Heading3, Paragraph } from "./Typography";
import { useDispatch } from "react-redux";
import { Card } from "./ui/card";
import { convert } from "html-to-text";
import { Button } from "./ui/button";
import { ArchiveIcon, ColorWheelIcon, TrashIcon } from "@radix-ui/react-icons";
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
import { useTheme } from "next-themes";

type Props = {
  note: NoteType;
};

const NoteCard = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useTheme();
  const router = useRouter();
  const textContent = convert(truncateText(props.note.text, 30));

  //Archive Note
  const archiveNote = async () => {
    //modifying note setting isArchive to true
    const note: NoteType = { ...props.note, isArchive: !props.note.isArchive };

    //updating the state
    dispatch(updateNote(note));

    //Going to archive page if note is arhived from
    //Going to home page is note is unarchived
    const goToURL =
      window.location.href === "http://localhost:3000/archives"
        ? window.location.href.replace("/archives", `/`)
        : window.location.href.replace("3000/", "3000/archives");

    //Replacing router
    router.replace(goToURL);
  };

  //Delete Note
  const deleteNote = async () => {
    const note: NoteType = { ...props.note };
    dispatch(removeNote(note.id));
    router.push(`/`);
  };

  return (
    <Card
      style={{
        backgroundColor:
          theme == "dark" ? props.note.color.dark : props.note.color.light,
      }}
      className={"transition-all p-4 flex flex-col"}
    >
      <Link key={props.note.id} href={`/note/${props.note.id}`}>
        <Heading3>
          <span className="hover:underline">{props.note.title}</span>
        </Heading3>
      </Link>
      <Paragraph className={"flex-grow"}>{textContent}</Paragraph>
      <div className="mt-5 flex gap-3">
        <TooltipProvider delayDuration={900}>
          <Tooltip>
            <TooltipTrigger>
              <Button onClick={archiveNote} size={"icon"} variant={"ghost"}>
                <ArchiveIcon className="w-4 h-4" />
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
                <TrashIcon className="w-4 h-4" />
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
