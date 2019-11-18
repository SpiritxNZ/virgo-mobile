import { SET_LOCALE } from "../constants/index";

export interface ISetLocale {
  localeIndex: number;
  type: SET_LOCALE;
}

export type LocaleAction = ISetLocale;

export const setLocale = (localeIndex: number): ISetLocale => ({
  type: SET_LOCALE,
  localeIndex: localeIndex
});
