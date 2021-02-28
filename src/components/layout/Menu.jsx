import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = (props) => {
    return ( 
        <div className="Menu">
            <h3>Rafael Paulo</h3>

            <div>
               <nav> 
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/About'>Sobre</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contato</Link>
                    </li>
                </ul>
               </nav>
            </div>

        </div>
    )
}

export default Menu