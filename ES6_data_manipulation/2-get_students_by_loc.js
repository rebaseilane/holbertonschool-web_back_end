/**
 * Returns students located in a specific city.
 *
 * @param {Array<Object>} students list of students
 * @param {string} city city name
 * @returns {Array<Object>} filtered students
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}