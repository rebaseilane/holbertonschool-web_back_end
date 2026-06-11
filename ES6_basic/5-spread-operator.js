/**
 * concatArrays - merges arrays and string using spread operator
 * @param {array} array1
 * @param {array} array2
 * @param {string} string
 * Return: array
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
