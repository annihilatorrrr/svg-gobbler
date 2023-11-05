import type { PageData } from 'types'

/**
 * Gathers all relevant SVG data from the active tab. Must be isolated self containing
 * function to make Chrome Manifest V3 security happy.
 */
export function gatherPageData() {
  /**
   * Background image urls must be parsed in the DOM window where
   * they are placed. Chrome strips them in the message.
   * This creates a new img with it set as the src to strip any security considerations.
   */
  const parseBgImageElements = () => {
    const extractSvgUrl = (backgroundImage: string) => {
      // base64, dataURI, or url all have svg in them
      const match = /url\("?(.*\.svg)"?\)/.exec(backgroundImage)
      return match ? match[1] : null
    }

    /**
     * This intentionally only checks divs. It could check images for background images
     * but it's so much more likely that it would be src. Recreates every background image
     * url to be an Image with a src for processing.
     */
    return Array.from(document.querySelectorAll('div'))
      .map((element) => {
        const style = window.getComputedStyle(element)
        const src = extractSvgUrl(style.backgroundImage)

        if (src) {
          const image = new Image()
          image.src = src
          return image.outerHTML
        }

        return null
      })
      .filter(Boolean) // Remove nulls (non-SVG backgrounds)
  }

  /**
   * Returns the outer html of a specified tag that includes 'svg' or '<g ' in the string.
   */
  function stringifyOuterHtmlByTag(tag: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap) {
    return Array.from(document.querySelectorAll(tag))
      .filter(({ outerHTML }) => outerHTML.includes('svg') || outerHTML.includes('<g '))
      .map((element) => element.outerHTML)
  }

  // TODO: Handle object, embed, and iframe tags

  const data = [
    ...new Set([
      ...parseBgImageElements(),
      ...stringifyOuterHtmlByTag('svg'),
      ...stringifyOuterHtmlByTag('symbol'),
      ...stringifyOuterHtmlByTag('img'),
      ...stringifyOuterHtmlByTag('g'),
    ]),
  ]

  return {
    data,
    host: document.location.host,
    origin: document.location.origin,
  } as PageData
}