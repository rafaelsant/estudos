import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from '././pages/landing/index';


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} />
        </BrowserRouter>
    );
}

export default Routes;