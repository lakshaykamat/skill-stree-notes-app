"use client";
import NoteCard from "@/components/NoteCard";
import { Heading1 } from "@/components/Typography";
import Link from "next/link";
import { useAppSelector } from "./redux/store";

const Home = () => {
  const notes = useAppSelector((state) => state.noteReducer.notes);
  return (
    <div>
      <Heading1>Home</Heading1>
      <section className="mt-4 justify-items-stretch grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {notes
          .filter((note) => note.isArchive === false)
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

export default Home;
