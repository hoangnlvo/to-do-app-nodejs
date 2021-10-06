const { Pool } = require("pg");
const util = require("util");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todolist",
  password: "kobiton",
  port: 5432,
});

const pool_query = util.promisify(pool.query).bind(pool);
module.exports = {
  load(sql) {
    return pool_query(sql);
  },
  add: (taskName, tableName) =>
    pool_query(`INSERT INTO ${tableName}(task_name) values ('${taskName}')`),
  delete: (taskID, tableName) =>
    pool_query(`DELETE FROM ${tableName} WHERE task_id = ${taskID}`),
};
