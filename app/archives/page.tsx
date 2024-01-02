"use client";
import NoteCard from "@/components/NoteCard";
import { Heading1 } from "@/components/Typography";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/lib/utils";

const ArhivePage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setNotes(getLocalStorageItem("noteData"));
    }
  }, []);

  return (
    <div>
      <Heading1>Archives</Heading1>
      <section className="mt-4 justify-items-stretch grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {notes
          .filter((note: NoteType) => note.isArchive === true)
          .map((note: NoteType) => (
            <Link key={note.id} href={`/note/${note.id}`}>
              <NoteCard
                color={note.color}
                title={note.title}
                text={note.text}
              />
            </Link>
          ))}
      </section>
    </div>
  );
};

export default ArhivePage;
