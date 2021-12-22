import {
    useState,
    useEffect
} from "react"
import ButtonSlider from './ButtonSlider'
import Places from "./APIPlaces"
import "./Slider.css"




export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== Places.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === Places.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(Places.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {Places.map((place, index) => {
                return (
                    <div
                    key={place.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img alt="images" src={place.image}/>
                        <h1>{place.name}</h1>
                        {/* <p>{place.description}</p> */}
                    </div>
                    // <div>key={place.id}
                    // id={place.id}
                    // image={place.image}
                    // name={place.name}
                    // description={place.description}</div>
                )
            })}
            <ButtonSlider moveSlide={nextSlide} direction={"next"} />
            <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((index) => (
                    <div
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
