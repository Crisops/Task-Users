import Task from '../models/task.model.js'

export const tasks = async (req, res) => {
  const { id } = req.session
  const tasks = await Task.find({ user: id })
  res.json(tasks)
}

export const getTask = async (req, res) => {
  const { id } = req.params

  const taskFind = await Task.findById(id)

  if (!taskFind) return res.status(404).json({ error: 'Task not found' })
  res.json(taskFind)
}

export const createTask = async (req, res) => {
  const { title, description, date } = req.body

  const newTask = await new Task({
    title,
    description,
    date,
    user: req.session.id
  })

  const savedTask = await newTask.save()

  res.json(savedTask)
}

export const updateTask = async (req, res) => {
  const { id } = req.params
  const task = req.body

  const updateTask = await Task.findByIdAndUpdate(id, task, { new: true })
  if (!updateTask) return res.status(404).json({ error: 'Task not found' })

  res.json(updateTask)
}

export const deleteTask = async (req, res) => {
  const { id: idSession } = req.session
  const { id } = req.params

  const taskFind = await Task.findByIdAndDelete(id)

  if (!taskFind) return res.status(404).json({ error: 'Task not found' })
  const tasks = await Task.find({ user: idSession })
  res.json(tasks)
}
