// Icons
import editIcon from '../../assets/edit.png'
import deleteIcon from '../../assets/delete.png'
// css
import '../../styles/EditDelete.css'
// Axios pour les requetes
import axios from 'axios';
import React, { useState } from 'react';
// Composant
// import Taches from './Taches';
import Modal from '../../Modal/Modal'


// Envoie l'id de la tâche au back, pour pouvoir la supprimer dans la BDD
function DeleteTache(idTache, e) {
	const postData = { id: idTache.id};
    axios.post('http://localhost:5001/DeleteTache', postData)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
	// e.preventDefault();
}







function EditDelete({ queryType, id, name, etat }) {
	
	// Modal edit tache
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => {
		setShowModal(!showModal);
	}

    // Retourne un icon en fonction du type demandé
	const iconType =
    queryType === 'edit' ? (
		<div>
			<img src={editIcon}  className='taches-item-logo' alt='edit-icon' onClick={toggleModal} />
				<Modal
					shouldShow = {showModal}
					onClose = {toggleModal}
					title = {"Modifier la tâche ?"}
					subtitle = {"Changer son état ?"} 
					type = {"editTache"}
					id = {id}
					name = {name}
					etat = {etat}
				/>
		</div>
			
		) : (
			<img src={deleteIcon} className='taches-item-logo'  alt='delete-icon'  onClick={() => DeleteTache({id}) }/>
		)

	return (
		<div>
			{iconType}
		</div>
	)
}

export default EditDelete