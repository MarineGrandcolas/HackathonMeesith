import "./Card.css"

const Card = ({ name, image, characters }) => {
	return (
		<div>
				<p>{name}</p>
				<img className="CardImg" src={image} alt={name} />
		</div>
	)
}
export default Card