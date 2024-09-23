const { createConnection } = require("mysql");
const { promisify } = require("util");

let query = null;
const connectDB = (params) => {
  if (!query) {
    // Create the MySQL connection once and promisify the query
    const connection = createConnection(params);
    // Promisify the connection query
    query = promisify(connection.query).bind(connection);
    console.log("MySQL connection established");
  }
  return query;
};

// Optionally, provide a way to close the connection
const closeConnection = () => {
  if (query) {
    query = null;
    console.log("MySQL connection reset.");
  }
};

module.exports = { connectDB, closeConnection };
