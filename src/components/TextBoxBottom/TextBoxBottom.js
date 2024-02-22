import React from 'react'; 
import "../TextBoxBottom/TextBoxBottom.scss"; 


function TextBoxBottom({bottomText}){
    return (
      <div className='textBoxBottom'>
        <div className='textBoxBottom__names'>
          <div>
            <h1 className='textBoxBottom__header--left'>{bottomText.nameLeft}</h1>
          </div>
          <div>
            <h1 className='textBoxBottom__header--right'> {bottomText.nameRight}</h1>
          </div>
        </div>

        <div className='textBoxBottom__body'>
              <p className='textBoxBottom__para'> {bottomText.text} </p>
        </div>
      </div>
    )
  }
  
  export default TextBoxBottom
