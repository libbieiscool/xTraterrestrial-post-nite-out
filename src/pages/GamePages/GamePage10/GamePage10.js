import React from 'react'; 
import "../GamePage10/GamePage10.scss"; 
import gameOver from '../../../assets/icons/gameOver.png'; 
import fire from '../../../assets/images/background/fire.png'; 

const GamePage10 = () => {
  return (
    <div className='body__block--character gamePage10'>
        <h2 className='gamePage10__text'>
        when you arrive at Sid's house any last shreds of admiration you might have had for him start to fizzle away... he says you can wait for him on the  bed while he cleans up. You wait patiently looking out into the sea of Space McDonald's wrappers and garbage littered around his sheet-less, mattress on the floor bed setup. You hear the wooden floors in the hallway creak as someone approaches the room except its not Sid who enters the room... but who you soon learn is Sid's GF... Sid comes shortly after and realizes he forgot his GF would be over that night... 

        </h2>
        <div className='gameOver '>
        <img className='gameOver__img' alt="game over text" src={gameOver} /> 
        
        <div className='gameOver__fireCollection'>
            <img className='gameOver__fire' alt="fire" src={fire}/> 
            <img className='gameOver__fire' alt="fire" src={fire}/> 
            <img className='gameOver__fire' alt="fire" src={fire}/> 
        </div>
        </div>

    </div>
  )
}

export default GamePage10
