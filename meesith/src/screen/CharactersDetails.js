import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const CharactersDetails = () => {
	const [character, setCharacter] = useState([])
	const params = useParams()

	useEffect(() => {
		const id = params.id
		const getData = () => {
			fetch(`https://raw.githubusercontent.com/Miadil/starwars-api/master/api/all.json/${id}`)
				.then((res) => res.json())
				.then((res) => console.log(res[0]) || setCharacter(res[0]))
		}
		getData()
	}, [])
	const {
        image,
        name,
        height,
        mass,
        gender,
	} = character
	return (
		<div>
			<h2>{name}</h2>
			<div>
				<img src={image} alt={name} />
			</div>

			<div>taille: {height} </div>
			<div>poids: {mass}</div>
			<div>genre: {gender}</div>
		
		</div>
	)
}
export default CharactersDetails