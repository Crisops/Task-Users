import { useForm } from 'react-hook-form'
import Input from './Input'
import { URL_API } from '../../config'
import { fetchAuth } from '../api/auth'

function Register () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const user = await fetchAuth(`${URL_API}/register`, data)
    console.log(user)
  })

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <form onSubmit={onSubmit} className='w-96 h-96 flex flex-col justify-center gap-2 bg-zinc-950 p-4'>
        <h3 className='text-center text-xl font-serif text-zinc-50 font-bold'>Create an account</h3>
        <Input
          type='text'
          placeholder='Username'
          handleInput={{ ...register('username', { required: 'Username is required' }) }}
          error={errors.username}
        />
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
        <button className='bg-sky-500 text-white font-serif px-1 py-2 transition-colors hover:bg-sky-600' type='submit'>Register</button>
      </form>
    </div>

  )
}

export default Register
