import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import ErrorAuth from '../components/ErrorAuth'

function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signin, isAuthenticated, error: registerError } = useAuth()

  const onSubmit = handleSubmit((data) => {
    signin(data)
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated, navigate])

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <form onSubmit={onSubmit} className='w-96 h-96 flex flex-col justify-center gap-2 bg-zinc-950 p-4'>
        <h3 className='text-center text-xl font-serif text-zinc-50 font-bold'>Login</h3>
        <Input
          type='email'
          placeholder='Email'
          handleInput={{ ...register('email', { required: 'Email is required' }) }}
          error={errors.email}
        />
        <Input
          type='password'
          placeholder='Password'
          handleInput={{ ...register('password', { required: 'Password is required' }) }}
          error={errors.password}
        />
        <button className='bg-sky-500 text-white font-serif px-1 py-2 transition-colors hover:bg-sky-600' type='submit'>Login</button>
        <p className='flex justify-between p-2 text-white'>Don't have an account? <Link to='/register' className='text-sky-500 font-normal font-sans'>Register</Link></p>
      </form>
      {registerError &&

      registerError.map((message, index) => {
        return <ErrorAuth key={index} registerError={message} />
      })}
    </div>
  )
}

export default Login
