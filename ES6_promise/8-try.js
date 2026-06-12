/**
 * Divides two numbers.
 *
 * @param {number} numerator
 * @param {number} denominator
 * @returns {number}
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  return numerator / denominator;
}