/**
 * Airport class
 */
export default class Airport {
  /**
   * Constructor
   * @param {string} name
   * @param {string} code
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Name getter
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * Code getter
   * @returns {string}
   */
  get code() {
    return this._code;
  }

  /**
   * String tag
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
