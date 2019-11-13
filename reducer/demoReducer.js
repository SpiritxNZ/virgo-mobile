const qrReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "scan":
      return Object.assign({}, state, { data: action.data });

    default:
      return state;
  }
};

export default qrReducer;
