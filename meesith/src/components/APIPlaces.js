import Card from "./Card";
import {useState} from 'react';
import "./APIPlaces.css";

const Places = [
	{
	"id":"1",
	"name":"Coruscant",      
	"image":"https://www.pop-up-urbain.com/wp-content/uploads/2017/05/Coruscant_landscape_RotS-800x435.png",
	"description":"Oecuménopole",
	},

	{
	"id":"2",
	"name":"Tatooine",    
	"image":"https://cdn-media.planete-starwars.com/news/72148-mos-eisley-169-lg.png?w=768",
	"description":"Désert",
	},

	{
	"id":"3",
	"name":"Kashyyyk",
	"image":"https://live.staticflickr.com/4548/26886055819_cdb084805c_b.jpg",
	"description":"Forêt",
	},

	{
	"id":"4",
	"name":"Hoth",
	"image":"https://i.ytimg.com/vi/mTEc_6oSSjo/maxresdefault.jpg",
	"description":"Glace",
	},

	{
	"id":"5",
	"name":"Yavin IV",
	"image":"https://i.redd.it/e5f9xgkxt7k11.jpg",
	"description":"Jungle",
	},

	{
	"id":"6",
	"name":"Kamino",  
	"image":"https://www.journaldugeek.com/wp-content/blogs.dir/1/files/2017/04/Water.jpg",
	"description":"Océan",
	},

	{
	"id":"7",
	"name":"Bespin",
	"image":"https://www.jeuxactu.com/datas/jeux/s/t/star-wars-battlefront/vn/array-570f5dda7ad56.jpg",
	"description":"Nuages",
	},

	{
	"id":"8",
	"name":"Mandalore",
	"image":"https://img1.starwars-holonet.com/holonet/dictionnaire/photos/lieu_sundari_2.jpg",
	"description":"Stérile",
	},

	{
	"id":"9",
	"name":"Naboo",
	"image":"https://img.planete-starwars.com/upload/databank/6/45014_conseil.jpg",
	"description":"Tous types",
	},

	{
	"id":"10",
	"name":"Mon Calamari",
	"image":"https://img.planete-starwars.com/upload/databank/3/3551_Moncalcity.jpg",
	"description":"Océan",
	},
]

export default Places;

// const Planets = () => {
// 	const [showLongVersion, setShowLongVersion] = useState(false);

// 	const display = (e) => {
// 		e.preventDefault();
// 				setShowLongVersion(!showLongVersion)
// 				console.log(showLongVersion)
// 	}
// 	return (
// 		<div>
// 			Planets !
// 			<div className="GaleryPlanets">
// 					{Places.map((place) => (
// 						<Card
// 							key={place.id}
// 							id={place.id}
//                             image={place.image}
// 							name={place.name}
//                             description={place.description}
// 						/>
// 					))}	
// 			</div>
// 		</div>
// 	)}
// export default Planets;
