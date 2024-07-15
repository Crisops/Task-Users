import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import RouteProtected from './pages/RouteProtected'
import Tasks from './pages/Tasks'

function App () {
  return (
    <section className='bg-zinc-900 w- full h-dvh'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route element={<RouteProtected />}>
              <Route path='/tasks' element={<Tasks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </section>
  )
}

export default App
