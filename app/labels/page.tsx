"use client";
import { Heading1, Heading2, Heading3 } from "@/components/Typography";
import { useAppSelector } from "../redux/store";
import Link from "next/link";
import NoteCard from "@/components/NoteCard";

const LabelsPage = () => {
  const notes = useAppSelector((state) => state.noteReducer.notes);
  const allLabels: Array<string> = [];

  notes.forEach((note) => {
    note.labels.forEach((label) => {
      if (!allLabels.includes(label)) {
        allLabels.push(label);
      }
    });
  });
  const filteredNotesByLabel = (labelToFilter: string) => {
    return notes.filter((note) => note.labels.includes(labelToFilter));
  };
  return (
    <div>
      <Heading1>Labels</Heading1>
      {allLabels.map((label, index) => {
        const labelNotes = notes.filter((note) => note.labels.includes(label));
        return (
          <>
            <Heading2 className="mt-6" key={`${index + label}`}>
              {label}
            </Heading2>
            <section className="mt-4 justify-items-stretch grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {labelNotes.map((note) => {
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
