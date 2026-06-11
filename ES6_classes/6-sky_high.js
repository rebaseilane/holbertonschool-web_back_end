import Building from './5-building.js';

/**
 * SkyHighBuilding class
 */
export default class SkyHighBuilding extends Building {
  /**
   * Constructor
   * @param {number} sqft
   * @param {number} floors
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Floors getter
   * @returns {number}
   */
  get floors() {
    return this._floors;
  }

  /**
   * Evacuation message
   * @returns {string}
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
