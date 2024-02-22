import React from 'react'



function TextBoxBottom({body}){
    return (
      <div className='textBoxTop'>
          <h1 className='textBoxTop__header'>{body.title}</h1>
          <div className='textBoxTop__body'>
              <p className='textBoxTop__para'> {body.text} </p>
          </div>
      </div>
    )
  }
  
  export default TextBoxBottom
