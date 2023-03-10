import '../../styles/SearchBar.css'
import React from 'react';


const SearchBar = ({ listTaches, setSearchResults }) => {

	const handleSubmit = (e) => e.preventDefault() 

	const handleSearchChange = (e) => {
		// Si la barre de recherche est vide, renvoyer la liste de base
		if(!e.target.value) return setSearchResults(listTaches)

		// Trier la list si caractere dans barre de recherche == le nom + l'etat de la tache
		const resultsArray = 
			listTaches.filter(tache => 
				tache.name.toLowerCase().includes(e.target.value.toLowerCase())
			+
				tache.etat.toLowerCase().includes(e.target.value.toLowerCase())
			)

		setSearchResults(resultsArray)
	}
  
	return (
		<div className='search-bar'>
			<form className="search-bar-elem" onSubmit={handleSubmit}>
		 		<input className='search-bar-input' id="search" placeholder='Recherche' type="text"  onChange={handleSearchChange}/>
			</form>
		</div>
	)
}

export default SearchBar


