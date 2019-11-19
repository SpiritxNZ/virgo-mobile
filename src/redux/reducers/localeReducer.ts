import { SET_LOCALE } from "../constants/index";
import { LocaleAction } from "../actions/localeActions";
import { ILocale } from "../types/localeTypes";

const localeReducer = (
  state: ILocale = { localeIndex: 0 },
  action: LocaleAction
): ILocale => {
  switch (action.type) {
    case SET_LOCALE:
      return { ...state, localeIndex: action.localeIndex };
    default:
      return { ...state, localeIndex: 0 };
  }
};

export default localeReducer;
