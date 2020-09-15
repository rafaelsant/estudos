import React from 'react';
import {Link} from 'react-router-dom';

import LogoTopo from "../../assets/images/Spotify_logo_with_text.svg";

import './styles.css'

const PageHeader: React.FunctionComponent = (props)=>{
    return(
        <header>
            <div className="page-header">
                <div className="top-bar-container">
                    <div className="topbar-links">
                        
                    </div>
                    <Link to="/">
                        <img id="logo-topo" src={LogoTopo} alt="Spotify"/>
                    </Link>
                    <Link to="/">
                        <h1 className="header-content">
                            Premium
                        </h1>
                    </Link>
                    <Link to="/">
                        <h1 className="header-content">
                            Ajuda
                        </h1>
                    </Link>
                    <Link to="/">
                        <h1 className="header-content">
                            Baixar
                        </h1>
                    </Link>
                    <h1 className="header-content">|</h1>
                    <Link to="/">
                        <h1 className="header-content">
                            Inscrever-se
                        </h1>
                    </Link>
                    <Link to="/">
                        <h1 className="header-content">
                            Entrar
                        </h1>
                    </Link>
                </div>
            </div>
        </header>
    );
}
export default PageHeader;