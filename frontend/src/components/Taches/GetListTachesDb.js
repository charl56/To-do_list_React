import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Composants principal pour les tâches. Il récupère les tâches dans la BDD, 
// et envoie la list reçu dans les autres composants pour l'affichage


function GetListTachesDb(){
    const [listTaches, setListTaches] = useState([]);
    var tabListTaches = []

    useEffect(() => {
        const getList = async () => {
            // Update the document title using the browser API
            tabListTaches = []
            await axios.get(`http://localhost:5001/getTachesListe`)
                .then(res => {
                    // Vider la liste des tâches 
                    // res.data.DataTache = objet json 'DataTaches' du back
                    res.data.DataTaches.forEach(element => {
                        // console.log({"id" : element[0], "name": element[1], "etat": element[2]})
                        tabListTaches.push({"id" : element[0], "name": element[1], "etat": element[2]})
                    });
                })
                setListTaches(tabListTaches)
        };
        getList();
    }, []);

    return listTaches
}

export default GetListTachesDb