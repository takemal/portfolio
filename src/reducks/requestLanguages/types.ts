/** reduxで扱うユーザー情報の型 */
export type RequestLanguages = {
  languages: Languages[],
  requestState: string,
};

export type Languages ={
  language:string
  count:number
}