/**
 * Executes a function safely and captures errors.
 *
 * @param {Function} mathFunction
 * @returns {Array}
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}