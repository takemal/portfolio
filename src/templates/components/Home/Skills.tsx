import { useEffect, useState } from "react";
import Circle from "react-circle";
import { useDispatch, useSelector } from "react-redux";
import { requestStates } from "../../../reducks/requestLanguages/initializes";
import { getLanguages } from "../../../reducks/requestLanguages/operations";
import { getLanguagesState, getRequestState } from "../../../reducks/requestLanguages/selectors";
import { AppDispatch, RootState } from "../../../reducks/store";

export const Skills = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [languageList, setLanguageList] = useState([{}])
  const selector = useSelector((useState:RootState)=> useState)
  const requestState =  getRequestState(selector)
  const languages = getLanguagesState(selector)
  
  // 簡易的に使用回数×10%を使用とする
  const converseCountToPercentage = (count:number) =>{
    if(count > 10){return 100}
    return count*10
  }

  const copiedLanguages = [...languages]
  // 言語リストを使用回数順にする。戻り値が0より大きかったら逆転する。
  const sortedLanguages = () => (
    copiedLanguages.sort((a, b) =>  a.count - b.count)
  )

  // マウント時、GitHubからaxiosでAPIを叩き、言語リストを抽出
  useEffect(() => { 
    dispatch(getLanguages())
  }, [])
  
  return (
    <div className="py-32 px-0 clear-both">
      <div className="w-74 mx-auto px-4">
        <div className="mb-8 text-center">
          <h2>Skills</h2>
        </div>
        <div className="flex flex-wrap text-center">
          {requestState === requestStates.loading && (
            <p className="">取得中...</p>
          )}
          {requestState === requestStates.success && (
            sortedLanguages().map((item, index)=>(
              <div className="m-12" key={index}>
                <p className=""><strong>{item.language}</strong></p>
                <Circle
                  animate={true}
                  progress={converseCountToPercentage(item.count)}
                />
              </div>
            ))
          )}


          {requestState === requestStates.error && (
            <p className="">取得失敗</p>
          )}
        </div>
      </div>
    </div>
  );
};