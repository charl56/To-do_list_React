import axios from "axios";

// Fonction de base, récupéère la liste des tâches dans la BDD
export const getList = async () => {
    var tabListTaches = []
    await axios.get(`http://localhost:5001/getTachesListe`)
        .then(res => {
            // Vider la liste des tâches, res.data.DataTache = objet json 'DataTaches' du back
            res.data.DataTaches.forEach(element => {
                tabListTaches.push({"id" : element[0], "name": element[1], "etat": element[2]})
            });
        })
        return tabListTaches
};