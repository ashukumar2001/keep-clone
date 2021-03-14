const removeNote = (
  state = {
    notes: [],
  },
  action
) => {
  switch (action.type) {
    case "REMOVE_NOTE":
      return {
        note:
          state.notes && state.notes.length
            ? [...state.notes].filter((note) => note.id !== action.payload.id)
            : [],
      };
    default:
      return state;
  }
};
export default removeNote;
