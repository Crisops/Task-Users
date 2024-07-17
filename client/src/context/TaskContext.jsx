import { createContext } from 'react'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  return (
    <TaskContext.Provider value=''>
      {children}
    </TaskContext.Provider>
  )
}
