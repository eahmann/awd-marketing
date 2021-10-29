import { fetchAPI } from "./fetch"

export default async function getGlobalData(locale) {
  console.log("getGlobalData")
  const global = await fetchAPI(`/global?_locale=${locale}`)
  return global
}
