/**
 * Returns values from a Set that start with startString.
 *
 * Only the remaining part of the string is returned.
 *
 * @param {Set} set Set of strings
 * @param {string} startString Prefix string
 * @returns {string} Joined string
 */
export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  return [...set]
    .filter(
      (value) => typeof value === 'string'
      && value.startsWith(startString),
    )
    .map((value) => value.slice(startString.length))
    .join('-');
}
