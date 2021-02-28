import React from 'react';

import './Contact.css';

import Mail2 from '../img/mail2.png'
import Link from '../img/link.png'
import Gram from '../img/gram2.png'

const Contact = (props) => {

    return(
        <div className="Contact">
            <ul>
                <li>
                   <a href="mainto:rafaelpsrp@hotmail.com" target='_blank'><img src={Mail2} alt=""/></a>
                </li>
                       
                <li>
                    <a href="https://www.instagram.com/rafaelpsrp/?hl=pt-br" target='_blank'><img src={Gram} alt=""/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rafael-paulo-santos-ribeiro-138b52152/" target='_blank'><img src={Link} alt=""/></a>
                </li>
            </ul>
        </div>
    )
}

export default Contact