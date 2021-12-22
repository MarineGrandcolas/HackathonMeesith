import {
    useState,
    useEffect
} from "react"

import Card from "../components/Card"

import "./CharactersStarWars.css"
import FilterClones from "./FilterClones"

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = () => {
            fetch("https://raw.githubusercontent.com/Miadil/starwars-api/master/api/all.json")
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    setCharacters(res)
                    setIsLoading(true)
                })
        }
        getData()
    }, [])

    return (
	<div>
			
		
		<div className="Characters">
			<h1>Choisissez votre clone !</h1>
			<div className="FilterCharacters">
				<FilterClones/>
			</div>
			<div className="GaleryCharacters">
				{isLoading ? (
					characters.map((character) => (
						<Card
							key={character.id}
							id={character.id}
							name={character.name}
							image={character.image}
						/>
					))
				) : (
					<div>...Loading</div>
				)}
			</div>
		</div>
	</div>
	)
}
export default Characters