import React, { useState } from "react";
import ArrowPrev from "../img/arrow-left.png"
import ArrowNext from "../img/arrow-right.png"

function Diaporama({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
        (prevIndex + 1 + images.length) % images.length

        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="diaporama">
            <div className="img-id">
                <img src={images[currentIndex]} />
            <img src={ArrowPrev} className="prev" onClick={prevSlide}></img>
            <img src={ArrowNext} className="next" onClick={nextSlide}></img>

            </div>
               
        </div>
    );
}

export default Diaporama;
