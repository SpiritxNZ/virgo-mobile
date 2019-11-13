const localeReducer = (state = { locale: null }, action) => {
  switch (action.type) {
    case "en":
      return Object.assign({}, state, { locale: "en" });
    case "ch":
      return Object.assign({}, state, { locale: "ch" });
    default:
      return Object.assign({}, state, { locale: "en" });
  }
};

export default localeReducer;
