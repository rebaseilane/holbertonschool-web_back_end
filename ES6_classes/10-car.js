/**
 * Car class
 */
export default class Car {
  /**
   * Constructor
   * @param {string} brand
   * @param {string} motor
   * @param {string} color
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Species
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Clone car
   * @returns {Car}
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
