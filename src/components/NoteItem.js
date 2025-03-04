import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext"; // Ensure this path is correct

const NoteItem = (props) => {
  const { note,updateNote } = props; // Destructure note from props
  const { deleteNote } = useContext(noteContext);  // Access deleteNote from the context

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => { deleteNote(note._id); props.showAlert("Deleted successfully","success") }} 
            ></i>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{
                updateNote(note); }}></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
