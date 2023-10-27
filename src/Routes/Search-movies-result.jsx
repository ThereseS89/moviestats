import { useRecoilState } from 'recoil'
import { resultState } from '../Atoms/searchResultState'
import { motion } from 'framer-motion'


const SearchResultContainer = () => {
	const [SearchResult, setSearchResult ] = useRecoilState(resultState)
	setSearchResult;
	console.log('Sökresultat: ', SearchResult)
	
	if (SearchResult.length === 1) {
		SearchResult.map((movieMatch) => (
			<div className='search-result-container' key={movieMatch.index}>
			<p className='search-result'>{movieMatch.Title}</p>
			
			</div>))
	}
	return (
		<section>
		<h2 className='head-search'>Search Result</h2>
		<div className='search-container'>
			{SearchResult && Array.isArray(SearchResult) ? (
				SearchResult.map((movieMatch) => (
				<motion.div 
				whileHover={{ scale: 1.2 }}className='search-result-container' key={movieMatch.index}>
				<p className='search-result'> <span>Title:</span> {movieMatch.Title}</p>
				<div className={SearchResult.length === 1 ? 'visible' : 'hidden'}>
					<p className='search-result'><span>Genre:</span> {movieMatch.Genre}</p>
					<p className='search-result'><span>Premiere:</span> {movieMatch.Premiere}</p>
					<p className='search-result'><span>Runtime:</span> {movieMatch.Runtime}</p>
				</div>
				</motion.div>
			))

			):(
				<div className='no-match-container'>
					<p className='search-result'>No movies matched</p>
				</div>
			)}
			</div>
		</section>
	)
}

export default SearchResultContainer