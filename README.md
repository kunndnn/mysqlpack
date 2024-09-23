# mysqlpack

`mysqlpack` is a lightweight, promise-based wrapper for MySQL queries, making it easier to interact with MySQL databases using Node.js by leveraging the power of promises for cleaner, asynchronous database operations.

## Features

- Simple and intuitive API.
- Promisified `query` function for MySQL.
- Automatically handles connection initialization and re-use.
- Includes graceful connection closing method.
- Easy to integrate into any Node.js project.

## Installation

You can install the package via npm:

```bash
npm install mysqlpack



Usage
1. Initialize the Connection
You can initialize the MySQL connection by passing the required connection parameters such as host, user, password, and database to connectDB.

const { connectDB } = require('mysqlpack');

// Initialize the connection with your MySQL credentials
const query = connectDB({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'your-database',
});

// Use the query function to perform a query
async function getUsers() {
  try {
    const users = await query('SELECT * FROM users');
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

getUsers();


2. Closing the Connection
You can close the MySQL connection using the closeConnection function, which is helpful when shutting down your application or resetting the connection.

javascript
Copy code
const { closeConnection } = require('mysqlpack');

// Close the connection when no longer needed
closeConnection();

API Documentation
connectDB(params)
Description: Initializes a MySQL connection and returns a promisified query function.
Parameters:
params (object): An object containing the MySQL connection parameters.
host (string): The hostname of the MySQL server. Default is localhost.
user (string): The MySQL username. Default is root.
password (string): The MySQL user's password. Default is an empty string.
database (string): The name of the MySQL database.
Returns: A promisified query function that can be used to run SQL queries.
closeConnection()
Description: Closes and resets the MySQL connection. Useful for gracefully shutting down the connection or resetting it when required.
Example
javascript
Copy code
const { connectDB, closeConnection } = require('mysqlpack');

// Initialize MySQL connection
const query = connectDB({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'your-database',
});

// Query function to get users
async function getUsers() {
  try {
    const users = await query('SELECT * FROM users');
    console.log(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Fetch users
getUsers();

// Close the connection when done
closeConnection();
Error Handling
All queries return promises, allowing you to handle errors either via async/await using try...catch blocks or .catch() method chaining:

javascript
Copy code
const { connectDB } = require('mysqlpack');

const query = connectDB({ host: 'localhost', user: 'root', password: 'password', database: 'yourdb' });

async function fetchData() {
  try {
    const data = await query('SELECT * FROM non_existing_table');
    console.log(data);
  } catch (err) {
    console.error('Query error:', err.message);
  }
}

fetchData();
Environment Variables
For production setups, it's common to use environment variables to configure database credentials. You can achieve this using process.env:

javascript
Copy code
const { connectDB } = require('mysqlpack');

const query = connectDB({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function getData() {
  const data = await query('SELECT * FROM my_table');
  console.log(data);
}

getData();
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Author
Your Name
GitHub: YourGitHubProfile

markdown
Copy code

### Explanation of Sections:
- **Features**: Highlights the key benefits and usage of the package.
- **Installation**: Simple npm installation instructions.
- **Usage**: Provides examples of how to initialize the connection and use the `query` function.
- **API Documentation**: Clearly explains the exported functions (`connectDB` and `closeConnection`).
- **Error Handling**: Shows how errors in the `query` can be caught.
- **Environment Variables**: Explains how to use environment variables for production setups.
- **License**: MIT license reference.

You can use this `README.md` when you publish your package on npm, providing users with clear instructions on how to integrate and use your package in their projects.

