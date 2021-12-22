import React from "react"
import Logo from "../components/Logo";
import CarrouselClones from '../components/CarrouselClones';
import PresProject from "../components/PresProject"
import "./Home.css";
import Places from 'assetsPlanets';
import Slider from "./components/Slider";

const Home = () => {
    return (
    <div className="homepageBlocks">
        <Logo className="logo"/>
        <PresProject className="presProject"/>
        <h2>Clones du mois</h2>
        <CarrouselClones/>
        <Slider />
    </div>

  )


}

export default Home
