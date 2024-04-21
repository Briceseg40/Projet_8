import React from 'react';

export function CreateTags({ tags }) {
    return tags.map((tag, index) => (
        <p key={index}>{tag}</p>
    ));
}
export function Ratings({ rating }) {
    return rating.map((rating, index) => (
        <p key={index}>{rating}</p>
    ));
}


