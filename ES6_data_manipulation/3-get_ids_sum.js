/**
 * Returns the sum of all student ids.
 *
 * @param {Array<Object>} students list of students
 * @returns {number} sum of ids
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
