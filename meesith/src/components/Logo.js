import React from 'react';
import LogoMain from '../assets/logo.png';
import LogoSlogan from '../assets/logo_slogan.png';
import LogoBg from '../assets/logo_bg.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img className="logoMain" src={LogoMain} alt="logo"/>
                <img className="logoSlogan" src={LogoSlogan} alt="logo slogan"/>
                <div className="blackSquare"></div>
            <img className="logoBg" src={LogoBg} alt="logo background"/>
        </div>
    )
}

export default Logo;