import React from "react"
import Logo from "../components/Logo";
import PresProject from "../components/PresProject"
import "./Home.css";
import Slider from "../components/Slider";

const Home = () => {
    return ( <div className="homepageBlocks">
        <Logo className="logo"/>
        <PresProject className="presProject"/>
        <Slider />
    </div>)
}

export default Home
