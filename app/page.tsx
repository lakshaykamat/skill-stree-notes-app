"use client";
import NoteCard from "@/components/NoteCard";
import { Heading1 } from "@/components/Typography";
import { NOTE_DATA } from "./data";
import Link from "next/link";
import { getLocalStorageItem, setLocalStorageItem } from "@/lib/utils";

const Home = () => {
  //If not data in localstorage add default note data
  if (getLocalStorageItem("noteData") == null) {
    setLocalStorageItem("noteData", NOTE_DATA);
  }
  console.log(localStorage.length);
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
