const express = require('express');

const app = express();

/**
 * Home route
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;