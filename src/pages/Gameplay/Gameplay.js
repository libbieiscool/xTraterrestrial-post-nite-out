import React from 'react'; 
import '../Gameplay/Gameplay.scss'; 
import { Link } from 'react-router-dom';


const Gameplay = () => {
  return (
    <div className='body__block gamePlay'>
        <h1 className='gamePlay__header'>Setting The Scene</h1>
        <div className='gamePlay__container'>
            <p className='gamePlay__setting'> 
                You are a 20 something alien girl on a distant planet not so different from our own. The space bars and clubs are closing and its time to go home. 
            </p>
            <p className='gamePlay__setting'>
                The choices you make will impact <span className='gamePlay__setting--detail'>if</span> and <span className='gamePlay__setting--detail' >how</span> our main character gets home.
            </p>
        </div>

        <div>
            <Link to={`page1`} >
                <button className='gamePlay__startButton'>
                    <h2>Let's Go Home!</h2>
                </button>
            </Link>
        </div>
    
    </div>
  )
}

export default Gameplay
