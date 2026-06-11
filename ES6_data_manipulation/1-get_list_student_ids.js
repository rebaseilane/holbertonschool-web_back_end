/**
 * Returns an array of student ids.
 *
 * @param {Array<Object>} students list of students
 * @returns {Array<number>} list of ids
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => student.id);
}
