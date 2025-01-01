const { taskController } = require("../controllers");
const express = require("express");
const upload = require("../config/multerConfig");

const router = express.Router();

router.get("/", taskController.getTasks);
router.post("/", upload.single("pdf"), taskController.createTask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
