import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../logements.json';
import "../css/appart.css"
import ArrowUp from "../img/Vector-up.png";
import CreateTags from 


export default function Appart() {
    CreateTags();
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
                <div className="two-side">
                    <div className="left-side">
                        <h3>{selectedData.title}</h3>
                        <p className='p-location'>{selectedData.location}</p>
                        <div className="tags">
                            <p id='tags-one'>{selectedData.tags[0]}</p>
                            <p>{selectedData.tags[1]}</p>
                            <p>{selectedData.tags[2]}</p>
                        </div>

                    </div>
                    <div className="right-side">
                        <div>
                            <p>{selectedData.host.name}</p>
                            <img src={selectedData.host.picture} alt={selectedData.host.name} />
                        </div>
                        <div className='ratings'>
                            <p>{selectedData.rating}</p>
                        </div>
                    </div>
                </div>
                <div className='defilement-button'>
                            <div className='defilement-individual'>
                                <button>Description</button>
                                <img src={ArrowUp}></img>
                            </div>
                            <div className='defilement-individual'>
                                <button>Équipements</button>
                                <img src={ArrowUp}></img>

                            </div>

                        </div>
            </div>
        </div>
    );
}

