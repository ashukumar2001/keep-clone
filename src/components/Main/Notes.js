import React from "react";
import { connect } from "react-redux";
import SingleNote from "./SingleNote";
import NoNotes from "./NoNotes";
const Notes = ({ notes }) => {
  return (
    <section className="notes-container">
      {notes && notes.length ? (
        notes.map((note) => {
          return <SingleNote key={note.id} note={note} />;
        })
      ) : (
        <NoNotes />
      )}

      {/* <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote /> */}
    </section>
  );
};
const mapStateToProps = (state) => {
  const { notes } = state;
  return {
    notes,
  };
};
export default connect(mapStateToProps)(Notes);
