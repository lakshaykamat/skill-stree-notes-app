"use client";
import { truncateText } from "@/lib/utils";
import { Heading3, Paragraph } from "./Typography";
import { useDispatch } from "react-redux";
import { Card } from "./ui/card";
import { convert } from "html-to-text";
import { ArchiveIcon, ColorWheelIcon, TrashIcon } from "@radix-ui/react-icons";
import { AppDispatch } from "@/app/redux/store";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { removeNote, updateNote } from "@/app/redux/note-slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { TagsIcon } from "lucide-react";
import React, { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

type Props = {
  note: NoteType;
};

const NoteCard = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [label, setLabel] = useState<string[]>(props.note.labels);
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
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
      <Paragraph className={"flex-grow break-words"}>{textContent}</Paragraph>
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
          <Tooltip>
            <TooltipTrigger>
              {/* <Popover>
                <PopoverTrigger>
                  <Button size={"icon"} variant={"ghost"}>
                    <TagsIcon className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size={"icon"} variant={"ghost"}>
                    <TagsIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Labels</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    onClick={() => {
                      const l = label;
                      if (l.includes("java")) {
                        const a = l.filter((item) => item !== "java");
                        const note: NoteType = { ...props.note, labels: a };
                        // [...new Set(arrayWithDuplicates)]
                        dispatch(updateNote(note));
                      } else {
                        l.push("java");

                        const uniqueArray: string[] = [];
                        l.forEach((item) => {
                          if (!uniqueArray.includes(item)) {
                            uniqueArray.push(item);
                          }
                        });
                        setLabel(uniqueArray);
                        const note: NoteType = { ...props.note, labels: label };
                        dispatch(updateNote(note));
                      }
                    }}
                  >
                    Java
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    onClick={() => {
                      const l = label;
                      if (l.includes("javascript")) {
                        const a = l.filter((item) => item !== "javascript");
                        const note: NoteType = { ...props.note, labels: a };
                        dispatch(updateNote(note));
                      } else {
                        l.push("javascript");

                        const uniqueArray: string[] = [];
                        l.forEach((item) => {
                          if (!uniqueArray.includes(item)) {
                            uniqueArray.push(item);
                          }
                        });
                        setLabel(uniqueArray);
                        const note: NoteType = { ...props.note, labels: label };
                        dispatch(updateNote(note));
                      }
                    }}
                  >
                    Javascript
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    onClick={() => {
                      const l = label;
                      if (l.includes("nextjs")) {
                        const a = l.filter((item) => item !== "nextjs");
                        const note: NoteType = { ...props.note, labels: a };
                        dispatch(updateNote(note));
                      } else {
                        l.push("nextjs");

                        const uniqueArray: string[] = [];
                        l.forEach((item) => {
                          if (!uniqueArray.includes(item)) {
                            uniqueArray.push(item);
                          }
                        });
                        setLabel(uniqueArray);
                        const note: NoteType = { ...props.note, labels: label };
                        dispatch(updateNote(note));
                      }
                    }}
                  >
                    Nextjs
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* </PopoverContent>
              </Popover> */}
            </TooltipTrigger>
            <TooltipContent>
              <p>Labels</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  );
};

export default NoteCard;
