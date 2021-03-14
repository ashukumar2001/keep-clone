import React from "react";
import SingleNote from "./SingleNote";
import { connect } from "react-redux";
const Notes = ({ notes }) => {
  return (
    <section className="notes-container">
      {notes && notes.length
        ? notes.map((note) => {
            return <SingleNote key={note.id} note={note} />;
          })
        : "No Notes"}
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
