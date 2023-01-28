// Icons
import editIcon from '../../assets/edit.png'
import deleteIcon from '../../assets/delete.png'
// css
import '../../styles/EditDelete.css'
// Axios pour les requetes
import React, { useState } from 'react';
// Composant
import Modal from '../../Modal/Modal'


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
		<div>
			<img src={deleteIcon} className='taches-item-logo'  alt='delete-icon'  onClick={toggleModal}/>
			<Modal
					shouldShow = {showModal}
					onClose = {toggleModal}
					title = {"Etes-vous sur de vouloir supprimer la tâche :"} 
					type = {"deleteTache"}
					id = {id}
					name = {name}
				/>
		</div>
		)

	return (
		<div>
			{iconType}
		</div>
	)
}

export default EditDelete