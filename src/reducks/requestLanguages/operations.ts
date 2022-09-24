import { Action } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../store";
import { errorAction, successAction } from "./slices";


  // [{言語、数},...]を返す。　@params[言語リスト]
  const languageCountObj = (allLanguageList :Array<string>) => {
    // nullを省いた言語リスト
    const notNullLanguageList = allLanguageList.filter(language => language !== null)
    // setオブジェクトにより、重複を削除した言語リスト
    const uniqueLanguageList = [...new Set(notNullLanguageList)]

    return uniqueLanguageList.map(uniqueLanguage => {
      return {
        language: uniqueLanguage,
        count: allLanguageList.filter(language => language === uniqueLanguage).length
      }
    });
  }

  // マウント時、GitHubからaxiosでAPIを叩き、言語リストを抽出
export const getLanguages = () =>{
  return async (dispatch :Dispatch<Action>) =>{
    axios.get('https://api.github.com/users/takemal/repos')
      .then((res: { data: { language: string; }[]; }) => {
      // 言語リストを抽出し、[{言語、数},...]をuseStateに渡す
        const allLanguages = res.data.map((Data :{language:string}) => Data.language)
        const countedLanguages = languageCountObj(allLanguages);
        dispatch(successAction(countedLanguages))
      })
    .catch(()=>{
      dispatch(errorAction)
    })
  }
}
