import {Link} from 'react-router-dom'

import "./CardPlaces.css"

const CardPlaces = ({ name, image, id, cartPlace, updateCartPlace }) => {
	const urlId = `/placesitems/${id}`
	return (
		<div className="CardTitle-box">
			<Link className="CardTitle" to={urlId} >
				<h2>{name}</h2>
				<img className="CardPlacesImg" src={image} alt={name} />
			</Link>
			<button class="glow-on-hover" onClick={() => updateCartPlace(cartPlace + 1)}>
                    AJOUTER
                </button>
		</div>
	)
}
export default CardPlaces