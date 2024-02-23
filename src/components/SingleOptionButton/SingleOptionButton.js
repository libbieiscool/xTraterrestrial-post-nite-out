import React from 'react'; 
import "../SingleOptionButton/SingleOptionButton.scss"; 

function SingleOptionButton({singleOption}){
  return (
    <div className='option'>
      <p className='option__text'>{singleOption.text} </p>
    </div>
  )
}

export default SingleOptionButton
