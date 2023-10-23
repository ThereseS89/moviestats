import specialsData from '../assets/data/specials.json'
import documentariesData from '../assets/data/documentaries.json'
import featureFilmsData from '../assets/data/featureFilms.json'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { resultState } from '../Atoms/searchResultState'
import { showSearchResultState } from '../Atoms/showSearchResultState'
const data = [...specialsData, ...documentariesData, ...featureFilmsData] 


const Search = () => {
	
	const [SearchResult, setSearchResult ] = useRecoilState(resultState)
	const [showSearchResult, setShowSearchResult] = useRecoilState(showSearchResultState)
	const navigate = useNavigate()
	function filterSearch(event) {
		
		let searchString = event.target.value.toLowerCase();
		console.log(searchString)
		const matchedMovies = data.filter((movie) => {
			return searchString === '' || movie.Title.toLowerCase().includes(searchString)
		});
		setSearchResult(matchedMovies)
		showSearchResultContainer()
		console.log('Sökresultat:', SearchResult)
	}
	
	function showSearchResultContainer() {
		
		if (!showSearchResult) {
			setShowSearchResult(true)
			navigate('/SearchResultContainer')

		} else {
			setShowSearchResult(false)
		}
		
		console.log(showSearchResult)
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