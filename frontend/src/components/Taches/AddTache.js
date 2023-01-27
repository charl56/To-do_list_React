// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import addIcon from '../../assets/add.png'
import '../../styles/TacheAjout.css'
import React, { useState } from 'react';
import Modal from '../../Modal/Modal'


function TacheAjout() {

	// Modal add tache
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => {
		setShowModal(!showModal);
	}


	return (
		<div className='tache-ajout' >
            <img src={addIcon}  className='taches-item-logo' alt='edit-icon' onClick={toggleModal}/>
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