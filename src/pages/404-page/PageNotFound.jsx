import React from 'react'
import './not-found.css'
import NotFoundImg from '../../assets/img/404.gif'
function PageNotFound() {
  return (
    <img className='not-found-img' src={NotFoundImg} alt="page not found " ></img>
  )
}

export default PageNotFound