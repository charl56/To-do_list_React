import '../../styles/SearchBar.css'
import React from 'react';


const SearchBar = ({ listTaches, setSearchResults }) => {

	const handleSubmit = (e) => e.preventDefault() 

	const handleSearchChange = (e) => {
		// Si la barre de recherche est vide, renvoyer la liste de base
		if(!e.target.value) return setSearchResults(listTaches)

		// Trier la list si caractere dans barre de recherche == le nom ou l'etat de la tache
		const resultsArray = 
			listTaches.filter(tache => tache.name.toLowerCase().includes(e.target.value.toLowerCase()))
		||
			listTaches.filter(tache => tache.state.toLowerCase().include(e.target.value.toLowerCase()))


			
		setSearchResults(resultsArray)
	}
  
	return (
		<div className='tdl-search-bar'>
			<form className="search tdl-search-bar-elem" onSubmit={handleSubmit}>
		 		<input className='tdl-search-bar-input search_input' id="search" placeholder='Recherche' type="text"  onChange={handleSearchChange}/>
			</form>
		</div>
	)
}

export default SearchBar


