import React from "react"
import Logo from "../components/Logo";
import CarrouselClones from '../components/CarrouselClones';
import PresProject from "../components/PresProject"
import Navbar from '../components/Navbar'
import Slider from "../components/Slider";
import "./Home.css";

const Home = () => {
    return (
    <div className="homepageBlocks">
        <Logo className="logo"/>
        <PresProject className="presProject"/>
        <h2>Clones du mois</h2>
        <CarrouselClones/>
        <Slider />
        <Navbar/>
    </div>

  )
}

export default Home
