import { createSlice } from "@reduxjs/toolkit";
import {initialRequestLanguagesState, requestStates} from "./initializes";
import { RequestLanguages } from "./types";

export const  requestLanguagesSlice = createSlice({
  name: "requestLanguages",
  initialState: initialRequestLanguagesState,
  reducers: {
    initialAction: (state: RequestLanguages ,action) => {
      return {
        languages:[],
        requestState: requestStates.initial
      }
    },
    fetchAction: (state: RequestLanguages ,action) => {
      return {
        ...state,
        requestState: requestStates.loading
      }
    },
    successAction: (state: RequestLanguages ,action) => {
      return {
        languages:action.payload,
        requestState: requestStates.success
        }
    },
    errorAction: (state: RequestLanguages ,action) => {
      return {
        languages:[],
        requestState: requestStates.error
      }
    },
  }
})


export const requestLanguagesReducer = requestLanguagesSlice.reducer;
export const {initialAction} = requestLanguagesSlice.actions; 
export const {fetchAction} = requestLanguagesSlice.actions; 
export const {successAction} = requestLanguagesSlice.actions; 
export const {errorAction} = requestLanguagesSlice.actions; 