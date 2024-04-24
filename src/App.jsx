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
        // isArchive: false,
      },
    ]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // const archiveNote = (id) => {
  //   const updatedNote = notes.filter((note) => {
  //     if (note.id === id) {
  //       note.isArchive = true;
  //     }
  //     return note;
  //   });
  //   setNotes(updatedNote);
  // };

  // const unarchiveNote = (id) => {
  //   const updatedNote = notes.filter((note) => {
  //     if (note.id === id) {
  //       note.isArchive = false;
  //     }
  //     return note;
  //   });
  //   setNotes(updatedNote);
  // };

  // const activeNotes = notes.filter((note) => note.isArchive === false);

  // const archivedNotes = notes.filter((note) => note.isArchive === true);

  return (
    <div className="h-full min-h-screen pb-5 bg-yellow-100">
      <NavigationBar />
      <p className="text-orange-400 font-semibold text-lg mx-10 mt-3">Total Notes : {notes.length}</p>
      <CreateNewNotes createNewNote={createNote} />
      <NoteList
        notes={notes}
        titleName="Catatan Saya Sekarang"
        deleteNote={deleteNote}
        // archiveNote={archiveNote}
      />
      <hr className="border border-t border-slate-900" />
      {/* <NoteList
        notes={notes}
        titleName={"Catatan yang Diarsip"}
        deleteNote={deleteNote}
        unarchiveNote={unarchiveNote}
      /> */}
    </div>
  );
}
