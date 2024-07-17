import { createContext, useEffect, useState } from 'react'
import { createTask, deleteTask, getTasks } from '../api/task'
import { URL_API } from '../../config'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTasksUser = async () => {
      try {
        const tasks = await getTasks(`${URL_API}/tasks`)
        setTask(tasks)
      } catch (error) {
        console.log(error)
      }
    }
    getTasksUser()
  }, [])

  const saveTask = async (task) => {
    try {
      const data = await createTask(`${URL_API}/tasks`, task)
      setTask(tasks => [...tasks, data])
    } catch (error) {
      console.log(error)
    }
  }

  const trashTask = async (idTask) => {
    try {
      const tasks = await deleteTask(`${URL_API}/tasks/${idTask}`)
      setTask(tasks)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, saveTask, trashTask }}>
      {children}
    </TaskContext.Provider>
  )
}
