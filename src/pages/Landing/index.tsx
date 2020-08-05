import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import StudyIcon from '../../assets/images/icons/study.svg'
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container">
                    <a href='' className='study'>
                        <img src={StudyIcon} alt="Estudar" />
                        Estudar
                    </a>

                    <a href='' className='give-classes'>
                        <img src={GiveClassesIcon} alt="Estudar" />
                        Estudar
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt="coração roxo"/>
                </span>

            </div>

        </div>
    )
}

export default Landing;