const db = require("../db");

const all = () => {
  // use my db connection to go and get my bands from the db
  // once i get my bands I will pass the data into the callback
  return db
    .queryAsync(
      `SELECT * 
        FROM bands;`
    )
    .then(results => results[0]);
};

/**
 *
 * @param {*} options {column: "name", value: "daft punk"}
 */
const filter = options => {
  const { column, value } = options;

  return db
    .queryAsync(
      `SELECT * 
        FROM bands
          WHERE ${column}="${value}";`
    )
    .then(results => results[0]);
};

module.exports = {
  all,
  filter,
};
