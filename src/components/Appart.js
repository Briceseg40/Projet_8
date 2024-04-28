import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../logements.json';
import "../css/appart.css"
import { CreateTags } from "./appart-function";
import RatingStars from "./RatingStars"
import Collapse from "./Collapse"
import Error from "./Error"

export default function Appart() {
    const params = useParams();
    const id = params.id;
    const selectedData = jsonData.find(data => data.id === id);
    if (!selectedData) {
        return <Error />;
    }

    return (
        <div className="infos-id">
            <div className="card-infos">
                <div className="img-id">
                    <img src={selectedData.cover} alt={selectedData.title} />
                </div>
                <div className="two-side">
                    <div className="left-side">
                        <h3>{selectedData.title}</h3>
                        <p className='p-location'>{selectedData.location}</p>
                        <div className="tags">
                            <CreateTags tags={selectedData.tags} />
                        </div>
                    </div>
                    <div className="right-side">
                        <div>
                            <p>{selectedData.host.name}</p>
                            <img src={selectedData.host.picture} alt={selectedData.host.name} />
                        </div>
                            <RatingStars rating={selectedData.rating} />
                    </div>
                </div>
                <div className='collapse-container'>
                   <Collapse title="Description" content={selectedData.description}/>
                   <Collapse title="Équipements" content={selectedData.equipments}/>
                 
                </div>
            </div>
        </div>
    );
}
