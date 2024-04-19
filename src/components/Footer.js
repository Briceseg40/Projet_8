import React from 'react';
import "../css/footer.css";
import logoFooter from "../img/LOGO-N.png";

export default function Footer() {
    return (
       <div className='container-footer'>
        <div className='grille-footer'>
            <img src={logoFooter} alt='logo en noir'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
       </div>
    );
}
