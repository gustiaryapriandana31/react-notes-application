import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function CreateNewNotes({ createNewNote, editNote, updateNote }) {
    const [day, setDay] = useState(""); 
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState(""); 

    const handleDayChange = (e) => {
        const value = e.target.value;
        setDay(value);
    }

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleDescriptionChange = (e) => {
        const value = e.target.value;
        setDescription(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editNote) {
            updateNote(editNote.id, day, title, description);
        } else {
            createNewNote(day, title, description);
        }        
        
        // Reset form after submitted
        setDay("");
        setTitle("");
        setDescription("");
    }

    useEffect(() => {
        if (editNote) {
          setDay(editNote.day);
          setTitle(editNote.title);
          setDescription(editNote.description);
        }
    }, [editNote]);

    return(
        <form className="flex flex-col items-center justify-center gap-3 mt-4"
        onSubmit={handleSubmit}>
            <div className="flex flex-row w-80">
                <label htmlFor="day" className="text-xl font-semibold mr-[6.3rem]">Day</label>
                <input type="text" className="px-2 py-1 border rounded-lg border-sky-500" name="day" value={day} onChange={handleDayChange} />
            </div>
            <div className="flex flex-row w-80">
                <label htmlFor="title" className="text-xl font-semibold mr-[6rem]">Title</label>
                <input type="text" className="px-2 py-1 border rounded-lg border-sky-500" name="title" value={title} onChange={handleTitleChange} />
            </div>
            <div className="flex flex-row w-80">
                <label htmlFor="description" className="text-xl font-semibold mr-8">Description</label>
                <textarea rows={4} className="px-2 py-1 border rounded-lg border-sky-500" name="deskripsi" value={description} onChange={handleDescriptionChange} />
            </div>
            <button disabled={day.length === 0 || title.length === 0 || description.length === 0} type="submit" className="mt-4 px-3 py-2 text-white font-semibold rounded-md disabled:cursor-not-allowed bg-yellow-400 hover:bg-yellow-600 disabled:opacity-70 disabled:hover:bg-yellow-600">Create Note</button>
        </form>
    );
}

CreateNewNotes.PropTypes = {
    createNewNote: PropTypes.func,
};
