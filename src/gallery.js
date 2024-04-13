import React from 'react';
import jsonData from '../public/fichier.json';

export default function Gallery() {
    return (
        <div id='gallery'>
            {jsonData.map((data, i) => (
                <div className='case-gallery' key={i}> 
                <a href='../html/page-appartement.html'>
                    <img src={data.cover} alt={data.title} />
                    <h3>{data.title}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
