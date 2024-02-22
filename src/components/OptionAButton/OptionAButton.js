import React from 'react'
import '../OptionAButton/OptionAbutton.scss'

function OptionAButton({optionA}){
  return (
    <div className='option'>
      <p className='option__text'>{optionA.text} </p>
    </div>
  )
}

export default OptionAButton

