import React from 'react'
import './About.css'
const About = (props) => {

    return (
        <div className="About">
            <div className='Paragrafo'>
                <h1 className='Ab__paragrafo'>Sobre</h1>
                <p className='Ab_MeP'>Sou graduando em ciência da computação da UniRuy, gosto de desenvolver 
                    e aprender sobre programação, estou sempre querendo ver coisas novas sobre, 
                    apesar da minha paixão por desenvolvimento de sistema, gosto também de praticar
                    esporte, ler, ficar com minha familia e ir para igreja.
                 </p>
            </div>
            <div className="Paragrafo">
                <h1 className="Ab__paragrafo">Experiência(s)</h1>
                <p className='Ab_MeP'>Estagiei na SEMA(Secretária de Meio Ambiente) onde tive um tempo de muito
                    apredizado técnicamente falando e em relação com as pessaos. Em 1 ano ajudei  
                    a desenvolver um sistema interno da Secretária.
                </p>
            </div>
            <div className="Paragrafo">
                <h1 className="Ab__paragrafo">Conhecimentos</h1>
                <nav>
                    <ul>
                        <li>Java</li>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS(Básico)</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default About;