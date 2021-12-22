import Places from '../assetsPlanets'
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const PlacesDetails = () => {
    const [place, setPlace] = useState({})
    const params = useParams()
    useEffect(() => {
        const id = params.id
        console.log(id)
        const getData = () => {
        setPlace(Places.find(elem => parseInt(elem.id) === parseInt(id)))
    }
    getData()
    }, [])
    

    return (
        <div>
            <h2>{place.name}</h2>
            <img src={place.image} alt = {place.name} />
            <p>{place.description}</p>
            
        </div>
    )
}

export default PlacesDetails