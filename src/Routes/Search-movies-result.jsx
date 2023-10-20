import { useRecoilState } from 'recoil'
import { resultState } from '../Atoms/searchResultState'

const SearchResultContainer = () => {
	const [SearchResult, setSearchResult ] = useRecoilState(resultState)
	setSearchResult;
	console.log('Sökresultat: ', SearchResult)
	return (
		<section>

			{SearchResult && Array.isArray(SearchResult) ? (
				SearchResult.map((movieMatch) => (
				<div key={movieMatch.index}>
				<p>{movieMatch.Title}</p>
				</div>
			))

			):(
				
				<p>Inga Filmer matchade</p>
			)}
		</section>
	)
}

export default SearchResultContainer