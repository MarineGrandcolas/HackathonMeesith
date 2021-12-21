import React from "react";
import Logo from "../components/Logo";
import { useState } from 'react'
import "../components/Cart.css" 

function Cart({cart, updateCart, cartPlace, updateCartPlace}) {
    const clonePrice = 8
    const placePrice = 5
    // const [cart, updateCart] = useState(0)
    // const [cartPlace, updateCartPlace] = useState(0)

    return (
        <div className='lmj-cart'>
            <Logo className="logo"/>
            <h2>Panier</h2>
            <div className="clone">
                Votre/Vos amour(s) de clone(s) :<br></br> {clonePrice} GaLacticCoins l'unité
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
                {cart > 0 ? <button onClick={() => updateCart(cart - 1)}>
                    Retirer
                </button> : "Rendez-vous ici pour trouver le clone de votre vie !"}
            </div>
            <div className="place">
                10 jours de test dans un lieu de rêve :<br></br> {placePrice} GaLacticCoins par séjour
                <button onClick={() => updateCartPlace(cartPlace + 1)}>
                    Ajouter
                </button>
                {cartPlace > 0 ? <button onClick={() => updateCartPlace(cartPlace - 1)}>
                    Retirer
                </button> : "Choisissez ici votre lieu rêvé pour du love +++"}
                {console.log(cart, cartPlace)}
            </div>
            <h3>Total : {(clonePrice * cart) + (placePrice * cartPlace)} GLC</h3>
        </div>
    )
}

export default Cart