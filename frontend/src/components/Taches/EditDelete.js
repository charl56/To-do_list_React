// Icons
import editIcon from '../../assets/edit.png'
import deleteIcon from '../../assets/delete.png'
// css
import '../../styles/EditDelete.css'
// Composant
import Modal from './Modal/Modal'

import React, { useState } from 'react';


function EditDelete({ queryType, id, name, etat, func }) {
	// Ouvre/ferme modal edit tache
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => {
		setShowModal(!showModal);
	}


    // Retourne un icon en fonction du type demandé, avec les props en conséquence au modal
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
					func = {func}
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
					func = {func}
				/>
		</div>
		)

	return (
		<div>
			{/* <button onClick={func} >bbb</button> */}
			{iconType}
		</div>
	)
}

export default EditDelete