/**
 * taskFirst - returns a string using const style variable
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
 * taskNext - uses let for mutable string concatenation
 * Return: string
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}