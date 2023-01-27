import '../../styles/Taches.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Components JS
import TachesItem from './TachesItem';
import TacheAjout from './AddTache';

// Components css
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Composants principal pour les tâches. Il récupère les tâches dans la BDD, 
// et envoie la list reçu dans les autres composants pour l'affichage

var listTaches = []

function GetListTachesDb(){
    const [listTaches, setListTaches] = useState([]);
    var tabListTaches = []

    useEffect(() => {
        const getList = async () => {
            // Vider le tableau avant d'effectuer une nouvelle requête
            tabListTaches = []
            await axios.get(`http://localhost:5001/getTachesListe`)
                .then(res => {
                    // Ajoute chaque objet au tableau  
                    res.data.DataTaches.forEach(element => {
                        tabListTaches.push({"id" : element[0], "name": element[1], "etat": element[2]})
                    });
                })
                // Ajoute à la variable listTaches, le tableau des objets obtenues
                setListTaches(tabListTaches)
        };
        getList();
    }, []);

    
    return listTaches
}

// function refreshListeTaches(){
//     console.log("refresh")
//     listTaches = GetListTachesDb()
//     console.log(listTaches)
// }

function Taches() {        
    //
    listTaches = GetListTachesDb()

	return (
		<div className='tdl-taches'>
			<Container className='tdl-taches-list'>

                {/* Titre du tableau des tâches */}
                <Row className='tdl-taches-list-title'>
                    <Col sm={5}>
                        <h5>Tâche</h5>
                    </Col>
                    <Col sm={5}>
                        <h5>Etat</h5>
                    </Col>
                </Row>

                {/* Envoie les données d'un tableau de tâches, dans un composant pour les afficher par lignes/colonnes */}
                { listTaches.map(taches => (
                    <TachesItem  
                        key = {taches.id}
                        id = {taches.id}
                        name = {taches.name}
                        etat = {taches.etat}
                    />
                    )) }

                <Row>
                    <TacheAjout />
                </Row>
			</Container>
		</div>
	)
}


export default Taches