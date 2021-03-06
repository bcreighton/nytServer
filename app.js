const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common')); // let's see what common format looks like

const books = require('./books-data.js');

app.get('/books', (req, res) => {
  const { search = '', sort } = req.query;

  // Check for valid sort parameter
  if (sort) {
    if (!['title', 'rank'].includes(sort)) {
      return res
        .status(400)
        .send('Sort must be one of title or rank');
    }
  }

  // Search Query
  let results = books
    .filter(book =>
      book
        .title
        .toLowerCase()
        .includes(search.toLocaleLowerCase()));

  if (sort) {
    results
      .sort((a, b) => {
        return a[sort] > b[sort]
          ? 1
          : a[sort] < b[sort]
            ? -1
            : 0;
      })
  }

  res.json(results);
});

module.exports = app;