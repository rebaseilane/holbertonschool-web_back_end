/**
 * taskBlock - ensures variables are block scoped correctly
 * @param {boolean} trueOrFalse
 * Return: array of booleans
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const innerTask = true;
    const innerTask2 = false;
    return [task, task2];
  }

  return [task, task2];
}