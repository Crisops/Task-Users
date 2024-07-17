import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import RouteProtected from './pages/RouteProtected'
import Tasks from './pages/Tasks'
import CreateTask from './pages/CreateTask'

function App () {
  return (
    <section className='bg-[#0A0E12] w- full h-screen overflow-hidden'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route element={<RouteProtected />}>
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/add-task' element={<CreateTask />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </section>
  )
}

export default App
