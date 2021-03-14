import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions";
import TakeNoteControls from "./TakeNoteControls";
import TakeNoteInput from "./TakeNoteInput";
const TakeNote = ({ addNote }) => {
  const [showAllInput, setShowAllInput] = useState(false);
  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);
  return (
    <section
      className="take-note-container"
      onFocus={() => {
        if (!showAllInput) {
          setShowAllInput(!showAllInput);
        }
      }}
      // onBlur={() => setShowAllInput(false)}
    >
      <div className="input-container">
        <TakeNoteInput
          querySelectorPlaceholder="note-title-placeholder"
          querySelectorInput="note-title-input"
          placeholderText="Title"
          refToAdd={titleInputRef}
        />
        {showAllInput && (
          <TakeNoteInput
            querySelectorPlaceholder="note-body-placeholder"
            querySelectorInput="note-body-input"
            placeholderText="Take a note..."
            refToAdd={bodyInputRef}
          />
        )}
      </div>
      {showAllInput && (
        <TakeNoteControls
          addNote={addNote}
          setShowAllInput={setShowAllInput}
          refs={{ titleInputRef, bodyInputRef }}
        />
      )}
    </section>
  );
};

export default connect(null, { addNote })(TakeNote);
