/**
 * taskBlock - fix var hoisting using let
 * @param {boolean} trueOrFalse
 * Return: array of booleans
 */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}