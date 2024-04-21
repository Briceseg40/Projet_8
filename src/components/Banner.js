import logo from "../img/LOGO.png";
import "../css/banner.css"
import { Link } from "react-router-dom";
const naviguations = [
    { name: 'Accueil', link: '/' },
    { name: 'A Propos', link: '/about' }
]

export default function Banner() {
    return (
        <div className="organ-nav">
            <a href="/">
                <img src={logo} alt="logo Kasa"></img>
            </a>
            <div>
                <ul>
                    {naviguations.map(naviguation => (
                        <li key={naviguation.name}>
                        <a href={naviguation.link}>{naviguation.name}</a>
                    </li>))}
                </ul>
            </div>
        </div>
    )
}





