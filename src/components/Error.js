import React from 'react';
import "../css/error.css"

export default function Error() {
    return (
        
        <div className='container-error'>
        <div className='message-error'> 
            <h1>404</h1>
            <h4>Oups! La page que vous demandez n'existe pas.</h4>
            </div>
            <a href='/'>Retourner sur la page d’accueil</a>
        </div>

    )
}