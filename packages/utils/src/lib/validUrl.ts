/**
 * Validate a string as a url
 *
 * @param {string} s
 * @returns {boolean}
 */
const validUrl = (s: string): boolean => {
  if (!s) {
    return false
  }

  return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(s)
}

export default validUrl
