import React, { useState } from 'react';
import "../css/gallery.css"
import jsonData from '../logements.json';
import Appart from "./Appart"
import SectionF from "./SectionF"

export default function Home() {
  
    return (
        <div>
            <SectionF />
            <div id='gallery'>
                {jsonData.map((data, i) => (
                    <a className='case-gallery' key={i} href={`/location/${data.id}`}>
                        <img src={data.cover} alt={data.title} />
                        <h3>{data.title}</h3>
                    </a>
                ))}
            
            </div>
        </div>
    );
}