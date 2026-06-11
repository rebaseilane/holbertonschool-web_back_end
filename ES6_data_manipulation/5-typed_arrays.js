/**
 * Creates a new ArrayBuffer and sets an Int8 value.
 *
 * @param {number} length buffer length
 * @param {number} position index position
 * @param {number} value value to store
 * @returns {DataView} data view
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  dataView.setInt8(position, value);

  return dataView;
}
