"use client";
import NoteCard from "@/components/NoteCard";
import { Heading1, Muted } from "@/components/Typography";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/lib/utils";
import { TypeWritter } from "@/public/assets/Illustration";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setNotes(getLocalStorageItem("noteData"));
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading1 className={"mb-6"}>Home</Heading1>
        <Link href={`/create`}>
          <Button>
            <Plus className="w-5 h-5 mr-2" />
            New
          </Button>
        </Link>
      </div>
      {notes.filter((note) => note.isArchive === false).length ? (
        <section className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
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
