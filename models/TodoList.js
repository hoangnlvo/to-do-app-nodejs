const db = require("../utils/db");
const TBL_TASKS = "tasks";
module.exports = {
  add: (taskName) => {
    return db.add(taskName, TBL_TASKS);
  },
  delete: (taskID) => {
    return db.delete(taskID, TBL_TASKS);
  },
  getAll: () => {
    return db.load(`SELECT * FROM ${TBL_TASKS} ORDER BY task_is_done`);
  },
  update: (taskID, taskIsDone) => {
    return db.load(
      `UPDATE ${TBL_TASKS} SET task_is_done = ${taskIsDone} where task_id = ${taskID}`
    );
  },
};
