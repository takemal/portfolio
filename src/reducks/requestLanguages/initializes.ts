import { RequestLanguages } from "./types";

/*** 定数　*/
export const requestStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR'
};


/*** ユーザー情報の初期化　*/
export const initialRequestLanguagesState: RequestLanguages = {
  languages: [],
  requestState: requestStates.initial,
};




