import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function NavbarTask () {
  const { user, logout } = useAuth()

  return (
    <div className='flex justify-between items-center w-full h-full p-5'>
      <span className='text-2xl font-sans text-white font-bold'>Welcome {user.username}</span>
      <nav className='flex-grow'>
        <ul className='flex items-center justify-end gap-x-4'>
          <li><Link className='font-sans font-normal text-white text-md bg-yellow-600/50 px-3 py-1 rounded-md border border-yellow-300 transition-colors hover:bg-yellow-950' to='/tasks'>Tasks</Link></li>
          <li><Link className='font-sans font-normal text-white text-md bg-green-800/50 px-3 py-1 rounded-md border border-green-400 transition-colors hover:bg-green-950' to='/add-task'>Create Task</Link></li>
          <li><Link onClick={logout} className='font-sans font-normal text-white text-md bg-purple-950/50 px-3 py-1 rounded-md border border-purple-600 transition-colors hover:bg-purple-950' to='/tasks'>Logout</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarTask
