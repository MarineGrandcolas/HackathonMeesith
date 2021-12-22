import React from "react"
import Home from "./screen/Home"
import Clones from "./screen/Clones"
import Contact from "./screen/Contact"
import Places from "./screen/Places"
import Cart from "./screen/Cart"
import PlacesItems from './screen/PlacesItems'
import PlacesDetails from "./screen/PlacesDetails"
import "./App.css"
import { useState } from 'react'
import { Routes, Route } from "react-router-dom" 
import CharactersDetails from "./screen/CharactersDetails";

const App = () => {
    const [cart, updateCart] = useState(0)
    const [cartPlace, updateCartPlace] = useState(0)
    return ( <div>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Clones cart={cart} updateCart={updateCart} cartPlace={cartPlace} updateCartPlace={updateCartPlace} />}/> 
                <Route path="/characters/:id" element= {<CharactersDetails/>} />
                <Route path="/places" element={<Places cart={cart} updateCart={updateCart} cartPlace={cartPlace} updateCartPlace={updateCartPlace} />}/> 
                <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} cartPlace={cartPlace} updateCartPlace={updateCartPlace}/>}/>
                <Route path="/placesitems" element={<PlacesItems />} />
                <Route path="/placesitems/:id" element={<PlacesDetails />} /> 
            </Routes>
        </div>
    </div>)
}

export default App
