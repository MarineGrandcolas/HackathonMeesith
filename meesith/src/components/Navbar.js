import Arrow from "../assets/arrow.png"
import Cart from "../assets/shopping.png"
import { NavLink } from "react-router-dom"
import React from 'react'
import "./Navbar.css"

// const arrowRotate = () => {
    
// }

const Navbar= () => {
  return (
      <div className="menu">
            <div className="burgerRow">
                <img className="arrow" src={Arrow} alt="logo" />
                <p>menu</p>
                <img className="cart" src={Cart} alt="go to cart" />
            </div>
            <div className="links">
                <NavLink className="link" to="/">
                    Accueil
                </NavLink>
                <NavLink className="link" to="/Clones">
                    clones
                </NavLink>
                <NavLink className="link" to="/Places">
                    lieux
                </NavLink>
                <NavLink className="link" to="/Contact">
                    contact
                </NavLink>                    
            
            </div>
        </div>
  );
}
export default Navbar;