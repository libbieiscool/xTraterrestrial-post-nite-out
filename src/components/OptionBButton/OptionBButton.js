import React from 'react'; 
import "../OptionBButton/OptionBButton.scss"; 

function OptionBButton({optionB}){
  return (
    <div className='option'>
      <p className='option__text'>{optionB.text} </p>
    </div>
  )
}

export default OptionBButton
