const { json } = require("express");
const clientService = require("../services/clientServices");

const getTasks = async (req, res) => {
  try {
    const tasks = await clientService.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error Fetching Data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createTask = async (req, res) => {
  try {
    const clientData = req.body;
    const newTask = await clientService.createTask(clientData);
    res.status(200).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(404).json({ message: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const clientId = req.params.id;
    const deleted = await clientService.deleteTask(clientId);
    if (!deleted) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).send({ message: "Task deleted successfully" });
  } catch (error) {
    console.log("Error Deleting Task", error);
    res.status(500).json({ message: "Error deleting task" });
  }
};

const searchTasks = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const tasks = await clientService.searchTasks(searchTerm);
    res.status(200).json(tasks);
  } catch (error) {
    console.log("Error Searching Tasks:", error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

module.exports = { getTasks, createTask, deleteTask, searchTasks };
