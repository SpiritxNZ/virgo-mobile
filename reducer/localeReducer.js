const localeReducer = (
  state = { localeIndex: null, position: "Auckland" },
  action
) => {
  switch (action.type) {
    case "locale":
      return Object.assign({}, state, { localeIndex: action.data });
    case "position":
      return Object.assign({}, state, { position: action.data });
    default:
      return Object.assign({}, state, {
        localeIndex: null,
        position: "Auckland"
      });
  }
};

export default localeReducer;
