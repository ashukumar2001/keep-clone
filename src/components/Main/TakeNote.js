import React from "react";
import TakeNoteControls from "./TakeNoteControls";
import TakeNoteInput from "./TakeNoteInput";
const TakeNote = () => {
  return (
    <section className="take-note-container">
      <div className="input-container">
        <TakeNoteInput
          querySelectorPlaceholder="note-title-placeholder"
          querySelectorInput="note-title-input"
          placeholderText="Title"
        />
        <TakeNoteInput
          querySelectorPlaceholder="note-body-placeholder"
          querySelectorInput="note-body-input"
          placeholderText="Take a note..."
        />
      </div>
      <TakeNoteControls />
    </section>
  );
};

export default TakeNote;
