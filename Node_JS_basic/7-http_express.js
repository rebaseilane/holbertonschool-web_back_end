const express = require('express');
const fs = require('fs');

const app = express();

/**
 * Count students helper
 */
function countStudents(path) {
  const data = fs.readFileSync(path, 'utf8');

  const lines = data.split('\n').filter((l) => l.trim() !== '');
  const students = lines.slice(1);

  const fields = {};

  students.forEach((student) => {
    const [firstname, , , field] = student.split(',');

    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  });

  let result = `Number of students: ${students.length}\n`;

  for (const field in fields) {
    result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
  }

  return result.trim();
}

/**
 * Home route
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Students route
 */
app.get('/students', (req, res) => {
  const database = process.argv[2];

  let response = 'This is the list of our students\n';

  try {
    response += countStudents(database);
  } catch (err) {
    response += 'Cannot load the database';
  }

  res.send(response);
});

app.listen(1245);

module.exports = app;