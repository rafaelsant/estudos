import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom'

import logoImg from '../images/Logo.svg';

import '../styles/pages/landing.css';

function Landing(){
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy"/>
                <main>
                    <h1>Leve Felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia das crianças</p>
                </main>
                <div className="location">
                    <strong>Uberlândia</strong>
                    <span>Minas Gerais</span>
                </div>
                <Link to='/app' className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link>
            </div>
        </div>
    );
}
export default Landing;