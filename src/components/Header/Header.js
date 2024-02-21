import React from 'react'; 
import '../Header/Header.scss'; 
import planet from '../../assets/icons/world.png'; 
import heart from "../../assets/icons/heart.png"; 
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className='header'>
        <div className='header__list--container'>
            <ul className='header__list--ul '>
                <Link to={`howtoplay`}>
                    <li className='header__list--li header__hover '>How to Play</li>
                </Link>
              <Link className='header__hover' to={`about`}> 
                <li className='header__hover'>About the Dev</li> 
              </Link>  
            </ul>
        </div>
        <div className='header__heartIcon'>
            <Link to={`/`}>
                <img className='header__img header__img--animated' src={heart} />
            </Link>
        </div>
        <div className='header__worldIcon'>
            <img className='header__img' src={planet}/>
        </div>

    </nav>
  )
}

export default Header
