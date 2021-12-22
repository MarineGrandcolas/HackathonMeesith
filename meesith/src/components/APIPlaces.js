import CardPlaces from "./CardPlaces";
import {useState} from 'react';
import "./APIPlaces.css";
import Places from "../assetsPlanets";



const Planets = () => {
	const [showLongVersion, setShowLongVersion] = useState(false);

	const display = (e) => {
		e.preventDefault();
				setShowLongVersion(!showLongVersion)
				console.log(showLongVersion)
	}
	return (
		<div>
			<div className="GaleryPlanets">
					{Places.map((place) => (
						<CardPlaces
							key={place.id}
							id={place.id}
                            image={place.image}
							name={place.name}
                            description={place.description}
						/>
					))}
			</div>
		</div>
	)}

export default Planets