import "./Card.css"

const Card = ({ name, image, id }) => {
	const idCharacter = `/characters/${id}`
	return (
		<div className="cards">
		
				<p className="pCardName">{name}</p>
				<img className="CardImg" src={image} alt={name} />
                <button className="buttonCard">Commandez votre Clone</button>
		</div>
	)
}
export default Card