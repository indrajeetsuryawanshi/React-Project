import React from 'react'
import './Line.css'
const Line2 = (props) => {
  return (
    <div className='sec-2'>
      <label>{props.label}</label>
      <p className='para'>{props.line}</p>
    </div>
  )
}

export default Line2
