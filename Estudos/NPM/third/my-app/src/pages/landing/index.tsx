import React from 'react';
import { Link} from 'react-router-dom'
import PageHeader from '../../compontents/pageHeader/index'

import '../landing/styles.css';


function Landing(){
    return(
        <div id="page-landing">

            <PageHeader/>
            <div id="page-landing-content" className="container">
                <h1 className="message-large">
                    Escutar <br/> muda tudo
                </h1>
                <h2 className="message-small">
                    Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
                </h2>
                <Link className="download">
                    OBTENHA O SPOTIFY FREE
                </Link>
            </div>
        </div>
    );
}

export default Landing;