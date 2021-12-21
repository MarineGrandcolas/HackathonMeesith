import {
    useState,
    useEffect
} from "react"

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = () => {
            fetch("https://miadil.github.io/starwars-api/api")
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
export default Characters