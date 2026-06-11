/**
 * Checks whether all values from an array exist in a Set.
 *
 * @param {Set} set Set of values
 * @param {Array} array Array to verify
 * @returns {boolean} true if all values exist
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
