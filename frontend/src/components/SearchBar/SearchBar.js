import '../../styles/SearchBar.css'

function SearchBar() {

	return (
		<div className='tdl-search-bar'>
			<div className='tdl-search-bar-elem'>
				<input className='tdl-search-bar-input' placeholder='Recherche' type="text" onChange={ (e) => console.log(e.target.value)} />
			</div>
		</div>
	)
}

export default SearchBar


