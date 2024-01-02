"use client";
import { Heading1, Heading2, Heading3 } from "@/components/Typography";
import NoteCard from "@/components/NoteCard";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/lib/utils";

const LabelsPage = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [allLabels, setAllLabels] = useState<Array<string>>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const local = getLocalStorageItem("noteData");
      setNotes(local);

      let arr: string[] = [];
      local.forEach((note: NoteType) => {
        note.labels.forEach((label: string) => {
          if (!allLabels.includes(label)) {
            arr.push(label);
          }
        });
        const seen: any = {};
        const uniqueArray = arr.filter((item) => {
          if (!seen[item]) {
            seen[item] = true;
            return true;
          }
          return false;
        });
        setAllLabels(uniqueArray);
      });
    }
  }, []);

  return (
    <div>
      <Heading1 className={"mb-6"}>Labels</Heading1>
      {allLabels.map((label, index) => {
        const filteredNotes = notes.filter((note) =>
          note.labels.includes(label)
        );
        return (
          <>
            <Heading2 className="mt-6" key={`${index + label}`}>
              {label}
            </Heading2>
            <section className="mt-4 justify-items-stretch grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredNotes.map((note) => {
                return <NoteCard key={note.id} note={note} />;
              })}
            </section>
          </>
        );
      })}
    </div>
  );
};

export default LabelsPage;
