import cache from "memory-cache"

// Get the url of the Strapi API based om the env variable or the default local one.
export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }
  const requestUrl = getStrapiURL(path)
  console.log("fetchAPI: " + requestUrl)
  const cacheValue = cache.get(requestUrl)
  if (cacheValue) {
    console.log("Cache hit")
    return cacheValue
  } else {
    console.log("Cache miss")
    const response = await fetch(requestUrl, mergedOptions)

    if (!response.ok) {
      console.error(response.statusText)
      throw new Error(`An error occured please try again`)
    }

    const data = await response.json()
    cache.put(requestUrl, data, 30)

    return data
  }
}
