import React from "react";
import { MdUndo, MdRedo, MdContentCopy } from "react-icons/md";
const TakeNoteControls = ({ noteBodyInputRef }) => {
  return (
    <div className="note-control-btn-container">
      <button className="undo-btn btn">
        <MdUndo />
      </button>
      <button className="redo-btn btn">
        <MdRedo />
      </button>
      <button
        className="copy-btn btn"
        onClick={() => {
          navigator.clipboard.writeText(noteBodyInputRef.current.innerText);
        }}
      >
        <MdContentCopy />
      </button>
      <button className="btn close-btn">Close</button>
    </div>
  );
};

export default TakeNoteControls;
