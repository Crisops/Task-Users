function Input ({ type, placeholder, handleInput, error }) {
  return (
    <>
      <input
        className='border-none outline-none px-2 py-3 rounded-sm font-serif bg-zinc-600/25 text-white'
        type={type}
        placeholder={placeholder}
        {...handleInput}
      />
      {error && <p className='text-red-500'>{error.message}</p>}
    </>
  )
}

export default Input
