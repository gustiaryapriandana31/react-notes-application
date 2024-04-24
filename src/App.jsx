import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import NoteList from "./components/NoteList";
import { initialNotes } from "./utils/notes";
import CreateNewNotes from "./components/CreateNewNotes";

export default function App() {
  const [notes, setNotes] = useState(initialNotes);

  const createNote = (day, title, description) => {
    setNotes((prev) => [
      ...prev,
      {
        id: +new Date(),
        day: day,
        title: title,
        description: description,
      },
    ]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="h-full min-h-screen pb-5 bg-yellow-100">
      <NavigationBar />
      <p className="text-orange-400 font-semibold text-lg mx-10 mt-3">Total Notes : {notes.length}</p>
      <CreateNewNotes createNewNote={createNote} />
      <NoteList
        notes={notes}
        titleName="Catatan Saya Sekarang"
        deleteNote={deleteNote}
      />
    </div>
  );
}
