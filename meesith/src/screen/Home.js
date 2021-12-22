import React from "react"
import Logo from "../components/Logo";
import PresProject from "../components/PresProject"
import Navbar from '../components/Navbar'
import Slider from "../components/Slider";
import "./Home.css";

const Home = () => {
    return ( <div className="homepageBlocks">
        <Logo className="logo"/>
        <PresProject className="presProject"/>
        <Slider />
        <Navbar/>
    </div>)
}

export default Home
