import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

function GoBack() {
  return (
    <div className="go-back py-5 my-2">
    <a href="#" className="btn d-inline-flex align-items-center">
      <IoIosArrowRoundBack className="arrwo-back-icon px-1 "/>
      <span className="pe-4">Back</span>
    </a>
  </div>
  )
}

export default GoBack