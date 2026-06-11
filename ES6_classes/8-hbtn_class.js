/**
 * HolbertonClass class
 */
export default class HolbertonClass {
  /**
   * Constructor
   * @param {number} size
   * @param {string} location
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Primitive conversion
   * @param {string} hint
   * @returns {*}
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }

    return this._location;
  }
}
