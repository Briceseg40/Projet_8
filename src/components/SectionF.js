import house from "../img/Chez-vous.png";
import "../css/SectionF.css"


export default function SectionF() {
    return <div className="sectionF">
    <div className="overlay"></div>
        <img src={house} alt="cascade"></img>
        <h3>Chez vous, partout et ailleurs</h3>
    </div>
}