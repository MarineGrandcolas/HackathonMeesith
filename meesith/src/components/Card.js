
const Card = ({ name, image}) => {
	return (
		<div>
				<p>{name}</p>
				<img className="CardImg" src={image} alt={name} />
		</div>
	)
}
export default Card