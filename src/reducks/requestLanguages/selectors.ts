import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const productsSelector = (state: RootState) => state.requestLanguages;

export const getRequestState = createSelector(
  [productsSelector],
  state => state.requestState
)

export const getLanguagesState = createSelector(
  [productsSelector],
  state => state.languages
)