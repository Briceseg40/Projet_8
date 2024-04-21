import React from 'react';

function generateStars(rating) {
    const filledStars = parseInt(rating); 
    const emptyStars = 5 - filledStars; 
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
        stars.push(<h1>Coucou</h1>);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i class="fa-duotone fa-star"></i>);
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
