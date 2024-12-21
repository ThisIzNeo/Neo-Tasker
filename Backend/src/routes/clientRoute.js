const express = require("express");
const clientController = require("../controllers/clientController");

const router = express.Router();

router.get("/tasks", clientController.getTasks);
router.post("/tasks", clientController.createTask);
router.delete("/tasks/:id", clientController.deleteTask);
router.get("/tasks/search", clientController.searchTasks);

module.exports = router;
