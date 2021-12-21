import {
    useState,
    useEffect
} from "react"
import Card from "./Card"


const SliderData = () => {
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
			Characters !
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
	)
}
export default SliderData