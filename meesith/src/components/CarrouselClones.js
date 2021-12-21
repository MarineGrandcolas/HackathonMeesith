import {
    useState,
    useEffect
} from "react"
import ButtonSlider from './ButtonSlider'
import sliderData from "./SliderData"
import "./CarrouselClones.css"




export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== sliderData.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === sliderData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(sliderData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {sliderData.map((character, index) => {
                return (
                    <div
                    key={character.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                    <img alt="images" src={character.image}/>
                    </div>
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