import house from "../img/Chez-vous.png";
import "../css/banner.css"


export default function Banner() {
    return <div className="banner">
    <div className="overlay"></div>
        <img src={house} alt="cascade"></img>
        <h3>Chez vous,<br className="return"/> partout et ailleurs</h3>
    </div>
}