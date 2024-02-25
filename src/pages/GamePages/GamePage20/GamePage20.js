import React from 'react'
import "../GamePage20/GamePage20.scss"
import "../../../Data/Fortunes.json"
//FORTUNE TELLER
const GamePage20 = () => {

    const [body,setBody] = useState(
        {title:"",
         text:"The night is starting to turn to morning as you walk when as you walk towards your house on a busy street "
        })

  return (
    <div className='body__block--character gamePage20'>
        <div className='gamePage20__textBox'>
            <TextBoxTop body={body}/>
        </div>
    </div>
  )
}

export default GamePage20
