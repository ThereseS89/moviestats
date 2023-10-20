import specialsData from '../assets/data/specials.json'
import documentariesData from '../assets/data/documentaries.json'
import featureFilmsData from '../assets/data/featureFilms.json'
import { useRecoilState } from 'recoil'
import { resultState } from '../Atoms/searchResultState'
const data = [...specialsData, ...documentariesData, ...featureFilmsData] 


const Search = () => {
	
	const [SearchResult, setSearchResult ] = useRecoilState(resultState)

	function filterSearch(event) {
		
		let searchString = event.target.value;
		console.log(searchString)
		const matchedMovies = data.filter((movie) => {
			return searchString.toLowerCase() === '' || movie.Title.toLowerCase().includes(searchString)
		});
		setSearchResult(matchedMovies)
		console.log('Sökresultat:', SearchResult)
		
		
	}
	

	
	return (
		<input 
			onChange={filterSearch} 
			placeholder="Search movie" 
			id="search-input" 
		/>
		
	) 
}

	export default Search