// import specialsData from './specials.json'
// import documentariesData from './documentaries.json'
// import featureFilmsData from './featureFilms.json'
// import { resultState } from '../Atoms/searchResultState'
// import useRecoilState from 'react-router-dom'

// function Search() {

// const data = [...specialsData, ...documentariesData, ...featureFilmsData] 


// const [showResult, setShowResult] = useRecoilState(resultState)
// const [resultMovie, setResultMovie] = useRecoilState(resultState)

// function stringIncludes(longString, shortString) {
// 	let ls = longString.toLowerCase()
// 	let ss = shortString.toLowerCase()
// 	return ls.includes(ss)
// }

//  function searchMovie(movieMatch, SearchString) {
// 	if (stringIncludes(data.title, SearchString)){ setShowResult(true)
// 		return true
// 	} 
// }



// const handleSearch = event => {
// 	let SearchString = event.target.value
// 	setResultMovie(data.filter(movie => movieMatch(movie, SearchString)))
// 	console.log(resultMovie)
// 	if (SearchString === "") {
// 		setShowResult(false)
// 	}
	
// }

// }

// export default Search