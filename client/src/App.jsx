import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <section className='bg-zinc-900 w- full h-dvh'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/register' element={<div>Register</div>} />
          <Route path='/login' element={<div>Login</div>} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
