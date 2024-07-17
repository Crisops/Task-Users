import { useForm } from 'react-hook-form'
import Input from './Input'

function CreateTaskForm () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='w-full flex flex-col max-w-[450px] h-[450px] bg-zinc-950/50 border border-zinc-800'>
      <form onSubmit={onSubmit} className='flex justify-center flex-grow flex-col gap-2 bg-zinc-950 p-4'>
        <h3 className='font-sans text-white font-bold text-2xl'>New Task</h3>
        <Input
          type='text'
          placeholder='Title'
          handleInput={{ ...register('title', { required: 'Title is required' }) }}
          error={errors.title}
        />
        <textarea
          className='border-none outline-none resize-none px-2 py-3 rounded-sm font-serif bg-zinc-600/25 text-white'
          placeholder='Description'
          rows={5}
          {...register('description', { required: 'Description is required' })}
        />
        {errors.description && <p className='text-red-500 text-xs font-bold font-serif'>{errors.description.message}</p>}
        <div className='flex justify-end my-1'>
          <button className='bg-sky-950 border border-sky-700 py-1 px-3 text-base text-white font-normal rounded transition-colors hover:bg-sky-950/50'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTaskForm
