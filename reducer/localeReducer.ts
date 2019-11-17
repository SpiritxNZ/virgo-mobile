const localeReducer = (
  state = { localeIndex: 0, position: "Auckland" },
  action
) => {
  switch (action.type) {
    case "locale":
      return Object.assign({}, state, { localeIndex: action.data });
    case "position":
      return Object.assign({}, state, { position: action.data });
    default:
      return Object.assign({}, state, {
        localeIndex: 0,
        position: "Auckland"
      });
  }
};

export default localeReducer;
