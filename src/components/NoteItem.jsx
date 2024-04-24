import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";

export default function NoteItem({
    note, 
    editNote,
    deleteNote,     
}) {
    const handleEditData = (id) => {
        editNote(id);
    };

    const handleDeleteNote = (id) => {
        deleteNote(id);
    };


    return(
        <div className="flex flex-col gap-3 p-3 text-black border rounded-md shadow-sm bg-white/80 border-slate-400 min-w-40">
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p>{note.description}</p>
            <small className="float-right text-sm text-sky-400">{note.day}</small>
            <div className="flex justify-between gap-2">
                <FiEdit className="text-xl text-yellow-500 cursor-pointer" 
                        onClick={() => handleEditData(note.id)} />
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