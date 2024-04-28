import React from 'react';
import '../css/ratingstars.css'

function generateStars(rating) {
    const filledStars = parseInt(rating); 
    const emptyStars = 5 - filledStars; 
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
        stars.push(<i class="fa-solid fa-star filled-star"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i class="fa-solid fa-star empty-star"></i>);
    }

    return stars;
}

export default function RatingStars({ rating }) {
    return (
        <div className="ratings">
            {generateStars(rating).map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
}
