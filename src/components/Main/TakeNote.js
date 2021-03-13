import React from "react";
import TakeNoteControls from "./TakeNoteControls";
import TakeNoteInput from "./TakeNoteInput";
import { takeNoteInputClassData } from "../../data";
const TakeNote = () => {
  return (
    <section className="take-note-container">
      <div className="input-container">
        {takeNoteInputClassData.map((data) => {
          return <TakeNoteInput data={data} />;
        })}
      </div>
      <TakeNoteControls />
    </section>
  );
};

export default TakeNote;
