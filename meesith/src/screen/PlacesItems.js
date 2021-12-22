import Planets from '../components/APIPlaces'

import "./PlacesItems.css"

const PlacesItems = () => {
    return (
        <div className="GaleryPlaces">
            <h1>
                Choisissez votre décor!
            </h1>
            <Planets />

        </div>
    )
}


export default PlacesItems