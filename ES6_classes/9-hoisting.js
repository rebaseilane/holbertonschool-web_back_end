/**
 * HolbertonClass
 */
class HolbertonClass {
  /**
   * Constructor
   * @param {number} year
   * @param {string} location
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Year getter
   * @returns {number}
   */
  get year() {
    return this._year;
  }

  /**
   * Location getter
   * @returns {string}
   */
  get location() {
    return this._location;
  }
}

/**
 * StudentHolberton
 */
class StudentHolberton {
  /**
   * Constructor
   * @param {string} firstName
   * @param {string} lastName
   * @param {HolbertonClass} holbertonClass
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Full name
   * @returns {string}
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Class getter
   * @returns {HolbertonClass}
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Student description
   * @returns {string}
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [
  student1,
  student2,
  student3,
  student4,
  student5,
];

export default listOfStudents;
