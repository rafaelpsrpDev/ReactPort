import React from 'react';

import './Inicio.css';
import Me from '../img/mw2.jpg'

const Inicio = (props) => {

    return (
        <div className='Inicio'>
            <img className='Photo' src={Me} alt="Rafael Paulo"/>
            <p className='Ap__name'>Oi, me chamo <span className='Ap__color'>Rafael</span>, Sou desenvolvedor</p>
        </div>
    )
}

export default Inicio