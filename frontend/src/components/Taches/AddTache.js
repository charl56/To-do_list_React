// Icon et css
import addIcon from '../../assets/add.png'
import '../../styles/AddTache.css'

import React, { useState } from 'react';
import Modal from './Modal/Modal'


function TacheAjout() {

	// Ovre/ferme modal ajout tache
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => {
		setShowModal(!showModal);
	}


	return (
		<div className='add-tache-div' >
            <img src={addIcon}  className='add-tache-icon' alt='edit-icon' onClick={toggleModal}/>
            <p>Ajouter une tâche</p>

			<Modal
				shouldShow = {showModal}
				onClose = {toggleModal}
				title = {"Ajouter une tâche :"}
				subtitle = {"Indiquer son état :"} 
				type = {"addTache"}
				/>
		</div>
	)
}

export default TacheAjout