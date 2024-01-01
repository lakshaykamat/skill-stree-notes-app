"use client";
import NoteCard from "@/components/NoteCard";
import { Heading1 } from "@/components/Typography";
import { NOTE_DATA } from "./data";
import Link from "next/link";
import { getLocalStorageItem, setLocalStorageItem } from "@/lib/utils";

type Props = {};

const Home = (props: Props) => {
  if (localStorage.length == 0) {
    setLocalStorageItem("noteData", NOTE_DATA);
  }
  return (
    <div>
      <Heading1>Home</Heading1>
      <section className="mt-4 justify-items-stretch grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {getLocalStorageItem("noteData").map((note: NoteType) => (
          <Link key={note.id} href={`/note/${note.id}`}>
            <NoteCard color={note.color} date={note.date} text={note.text} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
