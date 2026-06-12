const fs = require('fs').promises;

/**
 * Reads database asynchronously and groups students by field
 * @param {string} path
 * @returns {Promise}
 */
function readDatabase(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((l) => l.trim() !== '');
      const students = lines.slice(1);

      const fields = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      return fields;
    });
}

module.exports = readDatabase;
