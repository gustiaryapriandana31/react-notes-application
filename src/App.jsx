import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import NoteList from "./components/NoteList";
import CreateNewNotes from "./components/CreateNewNotes";

export default function App() {
  const [notes, setNotes] = useState("");
  const [editNoteData, setEditNoteData] = useState("");

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

  const handleEditNote = (id) => {
    const editedNote = notes.find((note) => note.id === id);
    setEditNoteData(editedNote);  
  }

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const updateNote = (id, day, title, description) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, day, title, description } : note
    );
    setNotes(updatedNotes);
    setEditNoteData(""); // Reset editNoteData setelah update
  };

  return (
    <div className="h-full min-h-screen pb-5 bg-yellow-100">
      <NavigationBar />
      <p className="text-orange-400 font-semibold text-lg mx-10 mt-3">Total Notes : {notes.length}</p>
      <CreateNewNotes 
        createNewNote={createNote} 
        editNote={editNoteData} 
        updateNote={updateNote} 
      />
      <NoteList
        notes={notes}
        titleName="My Current Notes"
        editNote={handleEditNote}
        deleteNote={handleDeleteNote}
      />
    </div>
  );
}
