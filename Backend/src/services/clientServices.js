const { query } = require("../db");
const { search } = require("../routes/clientRoute");

const getTasks = async () => {
  try {
    const result = await query("SELECT * FROM tasks_tb");
    return result.rows;
  } catch (error) {
    console.error("Error querying database:", error);
    throw error;
  }
};

const createTask = async (taskData) => {
  const { task, date, status } = taskData;
  try {
    const result = await query(
      "INSERT INTO tasks_tb (task, date, status) VALUES ($1, $2, $3) RETURNING *",
      [task, date, status]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error querying database:", error);
    throw error;
  }
};

const deleteTask = async (taskId) => {
  try {
    const result = await query("DELETE FROM tasks_tb WHERE id = $1", [taskId]);
    return result.rows > 0;
  } catch (error) {
    console.error("Error Deleting Task", error);
    throw error;
  }
};

const searchTasks = async (searchTerm) => {
  const result = await query("SELECT * FROM tasks_tb WHERE task ILIKE $1", [
    `%${searchTerm}%`,
  ]);
  return result.rows;
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  searchTasks,
};
