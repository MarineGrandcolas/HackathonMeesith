import React from "react";
import { useState } from 'react'
import "../components/Cart.css" 

function Cart() {
    const clonePrice = 8
    const placePrice = 5
    const [cart, updateCart] = useState(0)
    const [cartPlace, updateCartPlace] = useState(0)

    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <div className="clone">
                Votre/Vos amour(s) de clone(s) :<br></br> {clonePrice} GaLacticCoins l'unité
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <div className="place">
                10 jours de test dans un lieu de rêve :<br></br> {placePrice} GaLacticCoins par séjour
                <button onClick={() => updateCartPlace(cartPlace + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {(clonePrice * cart) + (placePrice * cartPlace)} GLC</h3>
        </div>
    )
}

export default Cart