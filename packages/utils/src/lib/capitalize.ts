/**
 * Capitalize the first letter each word in a string
 *
 * @param {string} s
 */
const capitalize = (s: string): string =>
  s.replace(/\w\S*/g, (i: string): string => i.charAt(0).toUpperCase() + i.slice(1).toLowerCase())
export default capitalize
