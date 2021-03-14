import React, { useRef } from "react";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions";
import TakeNoteControls from "./TakeNoteControls";
import TakeNoteInput from "./TakeNoteInput";
const TakeNote = ({ addNote }) => {
  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);
  return (
    <section className="take-note-container">
      <div className="input-container">
        <TakeNoteInput
          querySelectorPlaceholder="note-title-placeholder"
          querySelectorInput="note-title-input"
          placeholderText="Title"
          refToAdd={titleInputRef}
        />
        <TakeNoteInput
          querySelectorPlaceholder="note-body-placeholder"
          querySelectorInput="note-body-input"
          placeholderText="Take a note..."
          refToAdd={bodyInputRef}
        />
      </div>
      <TakeNoteControls
        addNote={addNote}
        refs={{ titleInputRef, bodyInputRef }}
      />
    </section>
  );
};

export default connect(null, { addNote })(TakeNote);
