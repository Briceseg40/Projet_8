import logo from "../img/LOGO.png";
import "../css/header.css"
import { Link } from "react-router-dom";
import About from "./About"
const naviguations = [
    { name: 'Accueil', link: '/' },
    { name: 'A Propos', link: '/about' }
]

export default function Header() {
    return (
        <div className="organ-nav">
            <a href="/">
                <img src={logo} alt="logo Kasa"></img>
            </a>
            <div>
                <ul>
                    {naviguations.map(naviguation => (
                        <li>
                        <Link to={naviguation.link}>{naviguation.name}</Link>
                    </li>))}
                </ul>
            </div>
        </div>
    )
}





