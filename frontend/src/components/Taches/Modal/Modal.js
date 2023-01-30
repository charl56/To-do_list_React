import '../../../styles/Modal.css'
import axios from 'axios';
import { useState, useRef } from 'react';

async function addTache(tache, state){
    // Variables envoyées dans le back, pour ajouter BDD
    var tacheName = tache.current.value
    var tacheState = state

    // Verification ??

    const postData = { name: tacheName, state: tacheState };
    await axios.post('http://localhost:5001/AddTache', postData)
        .then(res => {
            console.log(res.data);
            return true
    })
        .catch(err => {
            console.log(err);
            return false
    });
}



async function editTache(tache, state, id){
    // Variables envoyées dans le back, pour ajouter BDD
    var tacheName = tache.current.value
    var tacheState = state

    // Verification ??

    const postData = { name: tacheName, state: tacheState, id: id };
    await axios.post('http://localhost:5001/EditTache', postData)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
}

// Envoie l'id de la tâche au back, pour pouvoir la supprimer dans la BDD
async function deleteTache(idTache) {
	const postData = { id: idTache};
    await axios.post('http://localhost:5001/DeleteTache', postData)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    
}



function Modal ({shouldShow, onClose, title, subtitle, type, id, name, etat, func}) {
    // Données affichage modal
    // Variable input nom tache
    const inputTache = useRef(null);
    // Données radio button check pour ajouter tache
    const [stateRadioAdd, setstateRadioAdd] = useState('Fait');
    const onChangeRadioAdd = (e) =>{
      setstateRadioAdd(e.currentTarget.value) 
    }
    // Lance la fonction pour ajoute la tache a la BDD et fermer le modal
    async function addTacheClose (inputTache, stateRadioAdd) {
        console.log("inputTache ::",inputTache.current.value)
        if(inputTache.current.value !== ""){
            // aw : pour attendre le retour
            var aw = await addTache(inputTache, stateRadioAdd)
            onClose()
            func()
        }
        else{   
            alert("Le nom de a tâche ne doit pas être vide")
        }
    }

    // Données radio button check pour modifier tache
    const [stateRadioEdit, setStateRadioEdit] = useState(etat);
    const onChangeRadioEdit = (e) =>{
      setStateRadioEdit(e.currentTarget.value) 
    }
    // Lance la fonction pour editer la tache dans la BDD et fermer le modal
    async function editTacheClose (inputTache, stateRadioEdit, id){
        if(inputTache.current.value !== ""){
            // aw : pour attendre le retour
            var aw = await editTache(inputTache, stateRadioEdit, id)
            onClose()
            func()
        }
        else{   
            alert("Le nom de a tâche ne doit pas être vide")
        }
    }

    // Lance la fonction pour supprimer la tache dans la BDD et fermer le modal
    async function deleteTacheClose (id){
        // aw : pour attendre le retour
        var aw = await deleteTache(id)
        onClose()
        func()
    }        
    
    
    switch (type) {
        case "addTache": 
            return shouldShow === true 
            ? 
              <div className ="modal"> 
                  <span className ="title">{title}</span> 
                  <input className='tacheName' placeholder="Tache" type="text" ref={inputTache} />
                  <span className ="subtitle">{subtitle}</span> 
                  <div>
                      <input type="radio" value="Fait" name="state" checked={stateRadioAdd === 'Fait'} onChange={onChangeRadioAdd} /> Fait
                      <input type="radio" value="En cours" name="state" checked={stateRadioAdd === 'En cours'} onChange={onChangeRadioAdd} /> En cours
                      <input type="radio" value="A faire" name="state" checked={stateRadioAdd === 'A faire'} onChange={onChangeRadioAdd} /> A faire
                      <input type="radio" value="En retard" name="state" checked={stateRadioAdd === 'En retard'} onChange={onChangeRadioAdd}  /> En retard
                  </div>
                  <div className ="btns"> 
                      <button onClick={() => addTacheClose(inputTache, stateRadioAdd)} className ="btn btn-add">Ajouter</button> 
                      <button onClick ={onClose} className ="btn btn-cancel">Annuler</button>
                  </div>
              </div>
            : 
                <div style ={{display : 'none'}}></div>
        
        case "editTache": 
            return shouldShow === true 
            ? 
              <div className ="modal"> 
                  <span className ="title">{title}</span> 
                  <input className='tacheName' placeholder={name} defaultValue={name} type="text" ref={inputTache} />
                  <span className ="subtitle">{subtitle}</span> 
                  <div>
                      <input type="radio" value="Fait" name="state" checked={stateRadioEdit === 'Fait'} onChange={onChangeRadioEdit} /> Fait
                      <input type="radio" value="En cours" name="state" checked={stateRadioEdit === 'En cours'} onChange={onChangeRadioEdit} /> En cours
                      <input type="radio" value="A faire" name="state" checked={stateRadioEdit === 'A faire'} onChange={onChangeRadioEdit} /> A faire
                      <input type="radio" value="En retard" name="state" checked={stateRadioEdit === 'En retard'} onChange={onChangeRadioEdit}  /> En retard
                  </div>
                  <div className ="btns"> 
                      <button onClick={() => editTacheClose(inputTache, stateRadioEdit, id)} className ="btn btn-add">Modifier</button> 
                      <button onClick ={onClose} className ="btn btn-cancel">Annuler</button>
                  </div>
              </div>
            : 
                <div style ={{display : 'none'}}></div>
        
        case "deleteTache": 
            return shouldShow === true 
            ? 
                <div className ="modal"> 
                    <span className ="title">{title}</span>
                    <span className ="tache-name">{name}</span>


                    <div className ="btns"> 
                        <button onClick={() => deleteTacheClose(id)} className ="btn btn-delete">Supprimer</button> 
                        <button onClick ={onClose} className ="btn btn-cancel">Annuler</button>
                    </div>
                </div>
            : 
                <div style ={{display : 'none'}}></div>

        default:      
            return "";
	}  
}

 export default Modal