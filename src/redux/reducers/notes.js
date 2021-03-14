const initialState = [];
const notes = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...state,
        {
          id: new Date().getTime().toString(),
          content: action.payload,
        },
      ];
    case "REMOVE_NOTE":
      return state && state.length
        ? [...state].filter((note) => note.id !== action.payload.id)
        : [];
    default:
      return state;
  }
};

export default notes;
