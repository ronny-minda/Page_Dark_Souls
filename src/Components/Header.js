import React, { useState } from 'react';

import { Link } from "react-router-dom";

import logo from '../img/logo.png'



function Header() {

    const [estado, setEstado] = useState({
        home: 'nav-link active',
        bosses: 'nav-link',
        escenario: 'nav-link',
        programador: 'nav-link'
    })

    function Home() {
        console.log(estado.home);
        setEstado ({
            home: 'nav-link active',
            bosses: 'nav-link',
            escenario: 'nav-link',
            programador: 'nav-link'
        })
    }

    function Bosses() {
        console.log('Bosses!');
        setEstado ({
            home: 'nav-link',
            bosses: 'nav-link active',
            escenario: 'nav-link',
            programador: 'nav-link'
        })
    }

    function Stage() {
        console.log('Stage!');
        setEstado ({
            home: 'nav-link',
            bosses: 'nav-link',
            escenario: 'nav-link active',
            programador: 'nav-link'
        })
    }

    function Programador() {
        console.log('Programador!');
        setEstado ({
            home: 'nav-link',
            bosses: 'nav-link',
            escenario: 'nav-link',
            programador: 'nav-link active'
        })
    }

  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid container">
                <Link className="navbar-brand mt-3 mb-3" to="/Home">
                    <img src={logo} alt="Logo" width="200" height="30"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={Home}>
                            <Link className={ estado.home } aria-current="page" to="/Page_Dark_Souls/Home">Home</Link>
                        </li>
                        <li className="nav-item" onClick={Bosses}>
                            <Link className={ estado.bosses } to="/Page_Dark_Souls/Bosses">Bosses</Link>
                        </li>
                        <li className="nav-item" onClick={Stage}>
                            <Link className={ estado.escenario } to="/Page_Dark_Souls/Stage">Escenarios</Link>
                        </li>
                        <li className="nav-item" onClick={Programador}>
                            <Link className={ estado.programador } to="/Page_Dark_Souls/Programador" >Programador</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    
  );
}

export default Header;