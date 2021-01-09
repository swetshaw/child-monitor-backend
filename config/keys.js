const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'childTracker_api',
  password: 'root123',
  port: 5432,
})

module.exports = { pool: pool };