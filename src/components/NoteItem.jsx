import PropTypes from "prop-types";
import { FaRegTrashCan } from "react-icons/fa6";

export default function NoteItem({
    note, 
    deleteNote,     
}) {
    const handleDeleteNote = (id) => {
        deleteNote(id);
    };

    return(
        <div className="flex flex-col gap-3 p-3 text-black border rounded-md shadow-sm bg-white/80 border-slate-400 min-w-40">
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p>{note.description}</p>
            <small className="float-right text-sm text-sky-400">{note.day}</small>
            <div className="flex justify-between gap-2">
                <FaRegTrashCan
                    className="text-xl text-red-600 cursor-pointer"
                    onClick={() => handleDeleteNote(note.id)}
                />
            </div>
        </div>
    );
}

NoteItem.PropTypes = {
    note: PropTypes.object,
    deleteNote: PropTypes.func,
};