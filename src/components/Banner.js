import logo from "../img/LOGO.png";
import "../css/banner.css"
const naviguations = [
    'Accueil',
    'A Propos'
]

export default function Banner() {
    return (
    <div className="organ-nav">
    <a href="/">
    <img src={logo} alt="logo Kasa"></img>
    </a>
    <div>
        <ul>
            {naviguations.map(naviguation => (<li key={naviguation}>{naviguation}</li>))}
        </ul>
    </div>
    </div>   
    )
}


  


  