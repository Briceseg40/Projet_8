import React from 'react';
import jsonData from '../logements.json';

export default function Home() {
    return (
        <div id='gallery'>
            {jsonData.map((data, i) => (
                <div className='case-gallery' key={i}> 
                <a href='#'>
                    <img src={data.cover} alt={data.title} />
                    <h3>{data.title}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
