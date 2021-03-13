import React, { useRef } from "react";
import { MdDelete, MdContentCopy } from "react-icons/md";
const SingleNote = () => {
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
      <h4 className="note__title">This is note title</h4>
      <p className="note__description" ref={noteDescriptionRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum
        exercitationem ea nesciunt cupiditate. Unde ipsum nulla cupiditate vel
        quos!
      </p>
      <div ref={noteControlsRef} className="note-controls">
        <button
          className="copy-btn btn"
          onClick={() => {
            navigator.clipboard
              .writeText(noteDescriptionRef.current.innerText)
              .then(() => console.log("copied to clipboard"));
          }}
        >
          <MdContentCopy />
        </button>
        <button className="delete-btn btn">
          <MdDelete />
        </button>
      </div>
    </article>
  );
};

export default SingleNote;
