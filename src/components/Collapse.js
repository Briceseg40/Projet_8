import React, { useState } from "react";
import "../css/collapse.css"

export default function Collapse({ title, content }) {
    const [isOpened, setIsOpened] = useState(false);
    const toggleCollapse = () => {
        setIsOpened(!isOpened);
    };
    let renderedContent = content;

    if (title === "Équipements") {
        renderedContent = content.map((content, index) => (
                <p key={index}>{content}</p>
            ));
        }
    

    if (isOpened) {
        return (<div onClick={toggleCollapse} className='collapse'>
            <div className="collapse-title">
                <p>{title}</p>
                <i className="fa-solid fa-chevron-up collapse-img"></i>
            </div>
            <p className="collapse-content">{renderedContent}</p>

        </div>)
    } else {
        return (<div onClick={toggleCollapse} className='collapse'>
            <div className="collapse-title">

                <p>{title}</p>
                <i class="fa-solid fa-chevron-up"></i>
            </div>

        </div>)
    }
}