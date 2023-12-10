import React from 'react'
import './button.css'
function Button({children}) {
  return (
    <button className='d-flex gap-2 border-0'>
    {children}
    </button>
  )
}

export default Button