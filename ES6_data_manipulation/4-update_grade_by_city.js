/**
 * Updates grades for students in a city.
 *
 * @param {Array<Object>} students list of students
 * @param {string} city city name
 * @param {Array<Object>} newGrades grade list
 * @returns {Array<Object>} updated students
 */
export default function updateStudentGradeByCity(
  students,
  city,
  newGrades,
) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );

      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
