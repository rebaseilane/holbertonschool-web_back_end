/**
 * HolbertonCourse class definition
 */
export default class HolbertonCourse {
  /**
   * Constructor
   * @param {string} name
   * @param {number} length
   * @param {Array} students
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Validate array of strings
   * @param {Array} arr
   */
  static validateStudents(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Students must be an array of strings');
    }

    for (const item of arr) {
      if (typeof item !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }

  /**
   * name getter
   */
  get name() {
    return this._name;
  }

  /**
   * name setter
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * length getter
   */
  get length() {
    return this._length;
  }

  /**
   * length setter
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * students getter
   */
  get students() {
    return this._students;
  }

  /**
   * students setter
   */
  set students(value) {
    HolbertonCourse.validateStudents(value);
    this._students = value;
  }
}