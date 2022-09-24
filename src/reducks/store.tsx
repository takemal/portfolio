import { configureStore } from "@reduxjs/toolkit";
import { requestLanguagesReducer } from "./requestLanguages/slices";


export const store = configureStore({
  reducer:{
    requestLanguages: requestLanguagesReducer,
  },
})

// Stateの型定義
export type RootState = {
  requestLanguages: ReturnType<typeof requestLanguagesReducer>;
}

// dispatch設定
export type AppDispatch = typeof store.dispatch
