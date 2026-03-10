import React from "react";
import swuIcon from '../assets/images/icon-swu.png';
import precioluzIcon from '../assets/images/icon-precioluz.png';
import carburantesIcon from '../assets/images/icon-carburantes.png';
import randomtapIcon from '../assets/images/icon-randomtap.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Apps</h1>
        <div className="projects-row">
            <div className="project">
                <a href="https://apps.apple.com/us/app/swu-contador/id6745259934" target="_blank" rel="noreferrer"><img src={swuIcon} className="app-icon" alt="SWU Counter icon"/></a>
                <a href="https://apps.apple.com/us/app/swu-contador/id6745259934" target="_blank" rel="noreferrer"><h2>SWU Counter</h2></a>
                <p>Life counter for Trading Card Game players. Track points automatically.</p>
            </div>
            <div className="project">
                <a href="https://apps.apple.com/es/app/precioluz-pvpc/id1612287299" target="_blank" rel="noreferrer"><img src={precioluzIcon} className="app-icon" alt="PrecioLuz icon"/></a>
                <a href="https://apps.apple.com/es/app/precioluz-pvpc/id1612287299" target="_blank" rel="noreferrer"><h2>PrecioLuz PVPC</h2></a>
                <p>Check Spain's hourly electricity prices with widgets and next-day pricing.</p>
            </div>
            <div className="project">
                <a href="https://apps.apple.com/es/app/preciogas/id1633480481" target="_blank" rel="noreferrer"><img src={carburantesIcon} className="app-icon" alt="Carburantes icon"/></a>
                <a href="https://apps.apple.com/es/app/preciogas/id1633480481" target="_blank" rel="noreferrer"><h2>Carburantes</h2></a>
                <p>Real-time fuel prices at gas stations across Spain.</p>
            </div>
            <div className="project">
                <a href="https://apps.apple.com/us/app/random-tap/id6760021106" target="_blank" rel="noreferrer"><img src={randomtapIcon} className="app-icon" alt="Random Tap icon"/></a>
                <a href="https://apps.apple.com/us/app/random-tap/id6760021106" target="_blank" rel="noreferrer"><h2>Random Tap</h2></a>
                <p>Multiplayer tapping game. Everyone taps, one winner is picked at random.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
