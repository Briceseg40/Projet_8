import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../logements.json';

export default function Appart() {
    const params = useParams();
    const id = params.id;
    const selectedData = jsonData.find(data => data.id === id);
    if (!selectedData) {
       
        return <div>Aucun logement trouvé pour cette ID</div>;
    }
    return (
        <div className="infos-id">

            <div className="card-infos">
                <div className="img-id">
                    <img src={selectedData.cover} alt={selectedData.title} />
                </div>
                <div>
                    <div className="left-side">
                        <h3>{selectedData.cover}</h3>
                        <p>{selectedData.location}</p>
                        <div className="tags">
                            <p>{selectedData.tags}</p>
                    </div>
                        <div>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div>
                            <p>{selectedData.name}</p>
                            <img src={selectedData.picture} alt={selectedData.name} />
                        </div>
                        {/* Ratings */}
                    </div>
                </div>
            </div>
        </div>
    );
}

