import React from 'react'; 
import '../Header/Header.scss'; 
import planet from '../../assets/icons/world.png'; 
import heart from "../../assets/icons/heart.png"; 
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className='header'>
        <div className='header__list--container'>
            <ul className='header__list--ul'>
                <li>about the dev</li>
                <li>how to play</li>
            </ul>
        </div>
        <div className='header__heartIcon'>
            <img className='header__img' src={heart} />
        </div>
        <div className='header__worldIcon'>
            <img className='header__img' src={planet}/>
        </div>

    </nav>
  )
}

export default Header
