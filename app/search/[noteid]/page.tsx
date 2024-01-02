"use client";
import { useAppSelector } from "@/app/redux/store";
import NoteCard from "@/components/NoteCard";
import Tiptap from "@/components/Tiptap";
import { Heading1, Heading2, Small } from "@/components/Typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Save } from "lucide-react";
import { useState } from "react";

const SearchPage = ({ params }: { params: { noteid: string } }) => {
  const { noteid } = params;
  const searchTerm = noteid.replace(/%20/g, " ");
  const notes = useAppSelector((state) => state.noteReducer.notes);
  const note = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.labels.some((label) =>
        label.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
  if (!note)
    return (
      <>
        <div className="flex flex-col items-start gap-3 justify-start">
          <div>
            <Heading1>Note not found :/</Heading1>
            <Small>Go back to home</Small>
          </div>
          <Button>Home</Button>
        </div>
      </>
    );
  return (
    <div>
      <Heading2>Showing result for {searchTerm}</Heading2>
      <section className="mt-4 justify-items-stretch grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {note.length > 0 ? (
          note.map((note: NoteType) => <NoteCard key={note.id} note={note} />)
        ) : (
          <h2>Not there</h2>
        )}
        {/* <NoteCard key={note.id} note={note} /> */}
      </section>
    </div>
  );
};

export default SearchPage;
