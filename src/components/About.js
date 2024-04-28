import React from 'react'
import mountain from "../img/mountain.png"
import "../css/banner.css"
import "../css/about.css"
import Collapse from "./Collapse"

export default function About() {
    return (
        <div className='container-banner'>
            <div className="banner">
                <div className="overlay"></div>
                <img src={mountain} alt="Montagne"></img>
            </div>
            <div className='about-infos'>
            <Collapse title="Fiabilité" content="Fiabilité"/>
            <Collapse title="Respect" content="Fiabilité"/>
            <Collapse title="Service" content="Fiabilité"/>
            <Collapse title="Sécurité" content="Fiabilité"/>


            </div>
        </div>
    )
}