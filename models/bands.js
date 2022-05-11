const db = require("../db");

const all = () => {
  // TODO Retrieve all data from bands table
  return db.queryAsync(`SELECT * FROM bands;`).then(results => results[0]);
};

// all().then(data => {})

/**
 * ============================
 * Below you will find an example of a filter query
 * ============================
 */

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
