import './css/Tasks.css'

function Tasks () {
  return (
    <div className='w-full h-screen grid grid-cols-[repeat(auto-fill,_minmax(340px,_1fr))] p-5'>
      <div className='flex flex-col gap-y-2 bg-yellow-950/20 border border-yellow-400 h-96 rounded p-4'>
        <span className='text-xs font-semibold font-sans text-yellow-900'>Title</span>
        <h1 className='text-white font-sans font-bold text-2xl uppercase'>Esta es mi tarea</h1>
        <span className='text-xs font-semibold font-sans text-yellow-500'>Description</span>
        <div id='boxDescription' className='flex-grow overflow-y-auto'>
          <p className='text-white/50 font-sans'>Aqui ira la descripcion de mi tarea ya que no las puedo visualziar dado que no tengo internet y se me olvido comprar aunque sea datos  aunque sea datos  datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos datos </p>
        </div>
        <div className='flex justify-start gap-x-5 py-5'>
          <button className='text-white font-sans bg-red-950 border border-red-600 py-1 px-3 rounded-sm transition-colors hover:bg-red-950/50'>Delete</button>
          <button className='text-white font-sans bg-teal-950 border border-teal-400 py-1 px-3 rounded-sm transition-colors hover:bg-teal-950/50'>Update</button>
        </div>
      </div>
    </div>
  )
}

export default Tasks
