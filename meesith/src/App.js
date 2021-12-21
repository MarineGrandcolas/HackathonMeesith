import React from "react"
import Home from "./screen/Home"
import Clones from "./screen/Clones"
import Contact from "./screen/Contact"
import Places from "./screen/Places"
import Cart from "./screen/Cart"
import "./App.css"
import { useState } from 'react'

const App = () => {
    const [cart, updateCart] = useState(0)
    const [cartPlace, updateCartPlace] = useState(0)
    return ( <div>
        <div>
            {/* <Home /> 
            <Clones />
            <Contact />
            <Places />  */}
            <Cart cart={cart} updateCart={updateCart} cartPlace={cartPlace} updateCartPlace={updateCartPlace}/> 
        </div>
    </div>)
}

export default App
