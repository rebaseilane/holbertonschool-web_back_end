/**
 * Building class (abstract style)
 */
export default class Building {
  /**
   * Constructor
   * @param {number} sqft
   */
  constructor(sqft) {
    this._sqft = sqft;
  }

  /**
   * Getter for sqft
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Setter for sqft
   */
  set sqft(value) {
    this._sqft = value;
  }

  /**
   * Abstract method
   * Must be overridden in subclass
   */
  evacuationWarningMessage() {
    if (this.constructor === Building ||
        this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}