import '../../styles/Taches.css'
import React, { useState, useEffect } from 'react';
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


    useEffect(() => {
        getList().then(data => {
            setListTaches(data)
            console.log(data)
            return data
        }).then(data => {
            setsearchResults(data)
        })
    }, []);


	return (
		<div className=''>
            <SearchBar listTaches={listTaches} setSearchResults={setsearchResults} />
		    <div className='tdl-taches'>

                <Container className='tdl-taches-list'>

                    {/* Titre du tableau des tâches et états */}
                    <Row className='tdl-taches-list-title'>
                        <Col sm={5}>
                            <h5>Tâche</h5>
                        </Col>
                        <Col sm={5}>
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
                            />
                            ))}
                    </div>
                    </Row>

                    {/* Boutton pour ajouter tâche */}
                    <Row>
                        <AddTache />
                    </Row>
                </Container>
            </div>
		</div>
	)
}


export default Taches