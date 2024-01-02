"use client";
import { Heading1, Heading2, Heading3 } from "@/components/Typography";
import { useAppSelector } from "../redux/store";
import Link from "next/link";
import NoteCard from "@/components/NoteCard";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/lib/utils";

const LabelsPage = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [allLabels, setAllLabels] = useState<Array<string>>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const local = getLocalStorageItem("noteData");
      console.log(local);
      setNotes(local);

      let arr: string[] = [];
      local.forEach((note: NoteType) => {
        note.labels.forEach((label: string) => {
          if (!allLabels.includes(label)) {
            arr.push(label);
          }
        });
        setAllLabels(arr);
      });
    }
  }, []);

  return (
    <div>
      <Heading1>Labels</Heading1>
      {allLabels.map((label, index) => {
        const a = notes.filter((note) => note.labels.includes(label));
        console.log(a);
        return (
          <>
            <Heading2 className="mt-6" key={`${index + label}`}>
              {label}
            </Heading2>
            <section className="mt-4 justify-items-stretch grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {a.map((note) => {
                return (
                  <Link key={note.id} href={`/note/${note.id}`}>
                    <NoteCard
                      color={note.color}
                      title={note.title}
                      text={note.text}
                    />
                  </Link>
                );
              })}
            </section>
          </>
        );
      })}
    </div>
  );
};

export default LabelsPage;
