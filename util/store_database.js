const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "sql_store",
  password: "1234",
});

module.exports = pool.promise();
