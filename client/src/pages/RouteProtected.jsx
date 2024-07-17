import NavbarTask from '../components/NavbarTask'
import { TaskProvider } from '../context/TaskContext'
import { useAuth } from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

function RouteProtected () {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) return <Navigate to='/login' replace />

  return (
    <div>
      <TaskProvider>
        <NavbarTask />
        <Outlet />
      </TaskProvider>
    </div>
  )
}

export default RouteProtected
