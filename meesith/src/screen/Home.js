import React from "react"
import Logo from "../components/Logo";
import PresProject from "../components/PresProject"
import "./Home.css"

const Home = () => {
    return ( <div className="homepageBlocks">
        <Logo className="logo"/>
        <PresProject className="presProject"/>
    </div>)
}

export default Home
