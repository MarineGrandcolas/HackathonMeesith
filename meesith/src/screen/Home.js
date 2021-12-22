import React from "react"
import Logo from "../components/Logo";
import PresProject from "../components/PresProject"
import "./Home.css"
import Places from "./Places";

const Home = () => {
    return ( <div className="homepageBlocks">
        <Logo className="logo"/>
        <PresProject className="presProject"/>
        <Places />
    </div>)
}

export default Home
