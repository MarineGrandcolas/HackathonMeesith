import React from 'react';
import LogoMain from 'src/assets/logo.svg';
import LogoSlogan from 'src/assets/logo_slogan.svg';
import LogoBg from 'src/assets/logo_bg.svg';
import './Logo.css';

const Logo = () => {
    return (
        <div className="Logo">
            <img src={LogoMain} alt="logo"/>
            <img src={LogoBg} alt="logo background"/>
            <img src={LogoSlogan} alt="logo slogan"/>
        </div>
    )
}

export default Logo;