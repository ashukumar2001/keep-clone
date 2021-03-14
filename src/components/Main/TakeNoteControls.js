import React from "react";
import { MdUndo, MdRedo, MdSend } from "react-icons/md";

const TakeNoteControls = ({ refs, addNote, setShowAllInput }) => {
  const { titleInputRef, bodyInputRef } = refs;
  return (
    <div className="note-control-btn-container">
      <button className="undo-btn btn">
        <MdUndo />
      </button>
      <button className="redo-btn btn">
        <MdRedo />
      </button>
      <button
        className="btn close-btn"
        onClick={() => {
          const content = {
            title: titleInputRef.current.innerText,
            body: bodyInputRef.current.innerText,
          };
          addNote(content);
          titleInputRef.current.innerText = null;
          bodyInputRef.current.innerText = null;
          titleInputRef.current.focus();
          titleInputRef.current.blur();
          bodyInputRef.current.focus();
          bodyInputRef.current.blur();
          setShowAllInput(false);
        }}
      >
        <MdSend />
      </button>
    </div>
  );
};

export default TakeNoteControls;
