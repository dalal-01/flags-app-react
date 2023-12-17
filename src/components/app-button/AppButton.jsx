import React from 'react'
import './app-button.css'
function AppButton({children}) {
  return (
    <button className='d-flex gap-2 border-0'>
    {children}
    </button>
  )
}

export default AppButton