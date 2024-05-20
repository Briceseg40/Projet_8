import React from 'react'
import mountain from "../img/mountain.png"
import "../css/banner.css"
import "../css/about.css"
import Collapse from "./Collapse"
const contents = [
    { name: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.op' },
    { name: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
    { name: 'Service', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
    { name: 'Sécurité', content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}
]

export default function About() {
    return (
        <div className='container-banner'>
            <div className="banner">
                <div className="overlay"></div>
                <img src={mountain} alt="Montagne"></img>
            </div>
            <div className='about-infos'>
            {contents.map(content => (
                        <Collapse title={content.name} content={content.content}></Collapse>   
                    ))}
          </div>
        </div>
    )
}
