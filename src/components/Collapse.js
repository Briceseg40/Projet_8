import React, { useState } from "react";
import ArrowUp from "../img/Vector-up.png";
import "../css/collapse.css"

export default function Collapse({ title, content }) {
    const [isOpened, setIsOpened] = useState(false);
    const toggleCollapse = () => {
        setIsOpened(!isOpened);
    };
    let renderedContent = content;

    if (title == "Équipements") {
        renderedContent = content.map((content, index) => (
                <p key={index}>{content}</p>
            ));
        }
    

    if (isOpened) {
        return (<div onClick={toggleCollapse} className='collapse'>
            <div className="collapse-title">
                <p>{title}</p>
                <img id="collapse-img" src={ArrowUp} alt="Arrow Up" />
            </div>
            <p id="collapse-content">{renderedContent}</p>

        </div>)
    } else {
        return (<div onClick={toggleCollapse} className='collapse'>
            <div className="collapse-title">

                <p>{title}</p>
                <img  src={ArrowUp} alt="Arrow Up" />
            </div>

        </div>)
    }
}