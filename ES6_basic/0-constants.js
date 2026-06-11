/**
 * taskFirst - instantiate variable using const
 * Return: string
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * getLast - returns ending string
 * Return: string
 */
export function getLast() {
  return ' is okay';
}

/**
 * taskNext - instantiate variable using let
 * Return: string
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}