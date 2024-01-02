"use client";
import NoteCard from "@/components/NoteCard";
import { Heading1, Muted, Small } from "@/components/Typography";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/lib/utils";
import { TypeWritter } from "@/public/assets/Illustration";

const Home = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setNotes(getLocalStorageItem("noteData"));
    }
  }, []);

  return (
    <div>
      <Heading1>Home</Heading1>
      {notes.filter((note) => note.isArchive === false).length ? (
        <section className="mt-4 justify-items-stretch grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {notes
            .filter((note) => note.isArchive === false)
            .map((note: NoteType) => (
              <NoteCard key={note.id} note={note} />
            ))}
        </section>
      ) : (
        <div className="mt-12 flex flex-col justify-center items-center">
          <TypeWritter />
          <Muted>Not any notes there</Muted>
        </div>
      )}
    </div>
  );
};

export default Home;
