import '../../styles/MainTaches.css'
import React, { useState, useEffect, useReducer } from 'react';
// Components JS
import AddTache from './AddTache';
import SearchBar from '../SearchBar/SearchBar';
import TachesItem from './TachesItem';
// Components css
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getList } from '../Axios/Axios';

// Composants principal pour les tâches. Il récupère les tâches dans la BDD, 
// et envoie la list reçu dans les autres composants pour l'affichage


function Taches() {        

    // Variable et fonction pour set la variable
    const [listTaches, setListTaches] = useState([]);
    const [searchResults, setsearchResults] = useState([]);

    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        getList().then(data => {
            setListTaches(data)
            return data
        }).then(data => {
            setsearchResults(data)
        })
    }, [reducerValue]);


	return (
		<div className=''>
            <SearchBar listTaches={listTaches} setSearchResults={setsearchResults} />
		    <div className='taches'>
                <Container>

                    {/* Titre du tableau des tâches et états */}
                    <Row className='taches-list-title'>
                        <Col md ={5} sm={5} className="taches-tittle-col">
                            <h5>Tâche</h5>
                        </Col>
                        <Col md ={5} sm={5} className="taches-tittle-col" >
                            <h5>Etat</h5>
                        </Col>
                    </Row>
                    
                    {/* Envoie les données d'un tableau de tâches, dans un composant pour les afficher par lignes/colonnes */}
                    <Row>
                        <div>
                        {searchResults.map(taches => (
                            <TachesItem  
                                key = {taches.id}
                                id = {taches.id}
                                name = {taches.name}
                                etat = {taches.etat}
                                func = {forceUpdate}
                            />
                            ))}
                    </div>
                    </Row>

                    {/* Boutton pour ajouter tâche */}
                    <Row>
                        <AddTache
                            func = {forceUpdate}
                        />
                    </Row>
                </Container>
            </div>
		</div>
	)
}


export default Taches