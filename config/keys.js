const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'child_tracker_15Jan',
  password: 'root123',
  port: 5432,
})

module.exports = { pool: pool };