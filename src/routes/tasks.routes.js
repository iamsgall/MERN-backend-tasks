const {Router} = require('express');
const router = Router();
const Tasks = require('../models/Tasks');

router.get('/', async (req, res) => {
  const tasks = await Tasks.find();
  res.json(tasks);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const task = await Tasks.findById(id);
  res.json(task);
});

router.post('/', async (req, res) => {
  const {title, description} = req.body;
  const newTask = await new Tasks({title, description});
  await newTask.save();
  res.json('task added');
});

router.put('/:id', async (req, res) => {
  const {id} = req.params;
  const {title, description} = req.body;
  await Tasks.findByIdAndUpdate(id, {title, description});
  res.json('task updated');
});

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  await Tasks.findByIdAndDelete(id);
  res.json('task deleted');
});

module.exports = router;
