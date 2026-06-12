const http = require('http');
const fs = require('fs');

/**
 * Counts students from database file
 */
function countStudents(path) {
  const data = fs.readFileSync(path, 'utf8');

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = lines.slice(1);

  const fields = {};

  students.forEach((student) => {
    const parts = student.split(',');
    const firstname = parts[0];
    const field = parts[3];

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  });

  let output = `Number of students: ${students.length}\n`;

  for (const field in fields) {
    output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
  }

  return output.trim();
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];

    let response = 'This is the list of our students\n';

    try {
      response += countStudents(database);
    } catch (err) {
      response += 'Cannot load the database';
    }

    res.end(response);
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
