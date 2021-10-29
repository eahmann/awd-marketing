import { fetchAPI } from "./fetch"
import getGlobalData from "./global"

function mergeDataDeps(blockData, extendedData) {
  return Object.assign({}, blockData, extendedData)
}

export async function checkRequiredData(block, locale) {
  console.log("checkRequiredData")
  switch (block.__component) {
    case "blocks.contact-us-form":
      console.log("found a blocks.contact-us-form block")
      const global = await getGlobalData(locale)
      return mergeDataDeps(block, {
        contactInfo: global.contactInfo,
      })
    default:
      return block
  }
}

export async function getDataDependencies(json, locale) {
  let blocks = json.blocks
  blocks = await Promise.all(
    blocks.map((block) => checkRequiredData(block, locale))
  )
  return {
    ...json,
    blocks,
  }
}

/**
 *
 * @param {object} params The router params object with slug: { slug: [<slug>] }
 * @param {string} locale The current locale specified in router.locale
 * @param {boolean} preview router isPreview value
 */
export async function getPageData(params, locale, preview) {
  const previewParams = preview ? "&_publicationState=preview" : ""

  const slug = params.slug.join("/")
  // Find the pages that match this slug
  const pagesData = await fetchAPI(
    `/pages?slug=${slug}&_locale=${locale}${previewParams}`
  )

  // TODO add check for publish_at datetime field

  // Make sure we found something, otherwise return null
  if (pagesData == null || pagesData.length === 0) {
    return null
  }

  // Return the first item since there should only be one result per slug
  return await getDataDependencies(pagesData[0], locale)
}
