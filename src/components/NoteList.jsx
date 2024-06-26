import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

export default function NoteList({
    notes,
    titleName,
    editNote,
    deleteNote,
}) {
    return(
        <div className="flex flex-col gap-4 px-5 my-5">
            <h2 className="font-bold text-lg text-orange-500">{titleName}</h2>
            <div className="flex flex-wrap gap-4">
                {notes.length === 0 ? (
                    <p>You have not created a note yet</p>
                ) : (
                    notes.map((note) => (
                        <NoteItem 
                            key={note.id} 
                            note={note} 
                            editNote={editNote}
                            deleteNote={deleteNote} 
                        />
                    ))
                )}
            </div>
        </div>
    );
}

NoteList.PropTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    titleName: PropTypes.string,
    deleteNote: PropTypes.func,
}