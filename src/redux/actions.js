export const addNote = (content) => ({
  type: "ADD_NOTE",
  payload: content,
});
export const removeNote = (id) => ({
  type: "REMOVE_NOTE",
  payload: {
    id,
  },
});
