import React, { useRef } from "react";
import { MdDelete, MdContentCopy } from "react-icons/md";
import { connect } from "react-redux";
import { removeNote } from "../../redux/actions";
const SingleNote = ({ note, removeNote }) => {
  const {
    id,
    content: { title, body },
  } = note;
  const noteControlsRef = useRef(null);
  const noteDescriptionRef = useRef(null);
  return (
    <article
      className="note"
      onMouseOver={() =>
        noteControlsRef.current.classList.add("show-note-controls")
      }
      onMouseOut={() =>
        noteControlsRef.current.classList.remove("show-note-controls")
      }
    >
      <h4 className="note__title">{title}</h4>
      <p className="note__description" ref={noteDescriptionRef}>
        {body}
      </p>
      <div ref={noteControlsRef} className="note-controls">
        <button
          className="copy-btn btn"
          onClick={() => {
            navigator.clipboard.writeText(noteDescriptionRef.current.innerText);
          }}
        >
          <MdContentCopy />
        </button>
        <button className="delete-btn btn" onClick={() => removeNote(id)}>
          <MdDelete />
        </button>
      </div>
    </article>
  );
};

export default connect(null, { removeNote })(SingleNote);
