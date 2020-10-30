import React from 'react';
import {Map , TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt=""/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas criaças estão esperando a sua visita!</p>
                </header>
                <footer>
                    <strong>Uberlândia</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>
            <Map center={[-18.9138096,-48.2891368]}
            zoom={15}
            style={{width : '100%', height : "100%"}}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;