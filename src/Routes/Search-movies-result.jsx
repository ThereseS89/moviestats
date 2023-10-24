import { useRecoilState } from 'recoil'
import { resultState } from '../Atoms/searchResultState'



const SearchResultContainer = () => {
	const [SearchResult, setSearchResult ] = useRecoilState(resultState)
	setSearchResult;
	console.log('Sökresultat: ', SearchResult)
	return (
		<section className='search-container'>
			<h2 className='head-search'>Search Result</h2>
			{SearchResult && Array.isArray(SearchResult) ? (
				SearchResult.map((movieMatch) => (
				<div className='search-result-container' key={movieMatch.index}>
				<p className='search-result'>{movieMatch.Title}</p>
				</div>
			))

			):(
				<div className='no-match-container'>
					<p className='search-result'>No movies matched</p>
				</div>
			)}
		</section>
	)
}

export default SearchResultContainer