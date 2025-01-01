const { taskService: TaskServiceInstance } = require("../services");

const getTasks = async (req, res) => {
  try {
    const tasks = await TaskServiceInstance.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: `getTasks: ${err.message}` });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;
    const linkedFile = req.file
      ? { data: req.file.buffer, contentType: req.file.mimetype }
      : null;

    const newTask = await TaskServiceInstance.create({
      title,
      description,
      deadline,
      linkedFile,
    });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({
      error: `createTask: ${err.message}`,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskServiceInstance.update(id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `updateTask: ${err.message}` });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskServiceInstance.delete(id);
    res.status(204).send(result);
  } catch (err) {
    res.status(500).json({ error: `deleteTask: ${err.message}` });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
