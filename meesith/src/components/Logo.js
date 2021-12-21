import React from 'react';
import LogoMain from '../assets/logo.png';
import LogoSlogan from '../assets/logo_slogan.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="overflow">
        <div className="logo">
            <img className="logoMain" src={LogoMain} alt="logo"/>
                <img className="logoSlogan" src={LogoSlogan} alt="logo slogan"/>
                <div className="blackSquare"></div>
    
        </div>
        </div>
    )
}

export default Logo;