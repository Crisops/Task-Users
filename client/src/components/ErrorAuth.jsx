import React from 'react'

function ErrorAuth ({ registerError }) {
  return (
    <span className='text-red-500 font-bold text-sm'>{registerError}</span>
  )
}

export default ErrorAuth
