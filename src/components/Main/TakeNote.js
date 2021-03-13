import React from "react";
import TakeNoteControls from "./TakeNoteControls";
import TakeNoteInput from "./TakeNoteInput";
import { takeNoteInputClassData } from "../../data";
const TakeNote = () => {
  return (
    <section className="take-note-container">
      <div className="input-container">
        {takeNoteInputClassData.map((data, index) => {
          return <TakeNoteInput key={index} data={data} />;
        })}
      </div>
      <TakeNoteControls />
    </section>
  );
};

export default TakeNote;
