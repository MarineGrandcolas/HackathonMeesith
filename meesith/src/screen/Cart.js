import React from "react"
import Logo from "../components/Logo"
import {Link} from "react-router-dom"
import { useState } from 'react'
import "./Cart.css" 
// import { useRouteMatch } from "react-router-dom"

function Cart({cart, updateCart, cartPlace, updateCartPlace}) {
    const clonePrice = 8
    const placePrice = 5
    // let ici = useRouteMatch("/Clones");
    // const [cart, updateCart] = useState(0)
    // const [cartPlace, updateCartPlace] = useState(0)

    return (
        <div className='lmj-cart'>
            <Logo className="logo"/>
            <h2>Votre futur</h2>
            <div className="clone">
                Votre/Vos amour(s) de clone(s) :<br></br> {clonePrice} GaLactiCoins l'unité
                <button class="glow-on-hover" onClick={() => updateCart(cart + 1)}>
                    AJOUTER
                </button>
                {cart > 0 ? <button class="glow-on-hover" onClick={() => updateCart(cart - 1)}>
                    SUPPRIMER
                    </button> : <div>Rendez-vous {<Link to="/Clones" className="ici">ici</Link>} pour trouver le clone de votre vie !</div>
                }
            </div>
            <div className="place">
                10 jours de test dans un lieu de rêve :<br></br> {placePrice} GaLactiCoins par séjour
                <button class="glow-on-hover" onClick={() => updateCartPlace(cartPlace + 1)}>
                    AJOUTER
                </button>
                {cartPlace > 0 ? <button class="glow-on-hover" onClick={() => updateCartPlace(cartPlace - 1)}>
                    SUPPRIMER
                </button> : <div>Choisissez {<Link to="/Places" className="ici">ici</Link>} votre lieu rêvé pour du love +++</div>}
                {console.log(cart, cartPlace)}
            </div>
            <h3>Total : {(clonePrice * cart) + (placePrice * cartPlace)} GLC</h3>
        </div>
    )
}

export default Cart
