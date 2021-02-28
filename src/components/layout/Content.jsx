import React from 'react';
import {Switch, Route}  from 'react-router-dom'

import './Content.css';

import Inicio from '../../views/Inicio.jsx';
import About from '../../views/About.jsx';
import Contact from '../../views/Contact.jsx'

const Content = (props) => {

    return (
        <div className="Content">
            <Switch>
                <Route path='/' exact >
                    <Inicio />
                </Route>
                <Route path='/About'>
                    <About />
                </Route>
                <Route path='/Contact'>
                    <Contact/>
                </Route>
            </Switch>
        </div>
    )
}

export default Content;