import logo from "../img/LOGO.jpg";
const naviguations = [
    'Accueil',
    'A Propos'
]

export default function Nav() {
    return <div className="organ-nav">
    <img src={logo}></img>
    <div>
        <ul>
            {naviguations.map(naviguation => (<li key={naviguation}>{naviguation}</li>))}
        </ul>
    </div>
    </div>   
}


  


  