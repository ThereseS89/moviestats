// Hämta DATAN till de olika chartsen
import specialsData from './specials.json'
import documentariesData from './documentaries.json'
import featureFilmsData from './featureFilms.json'

console.log('specials: ', specialsData, 'documentaries: ', documentariesData, 'featureFilms: ', featureFilmsData )

const data = [...specialsData, ...documentariesData, ...featureFilmsData] 

// Hur många Filmer på varje språk
const moviesPerLanguage = {};
data.forEach((movie) => {
	const language = movie.Language
	if (moviesPerLanguage[language]) {
		moviesPerLanguage[language] += 1;
	} else {
		moviesPerLanguage[language] = 1
	}
})


export function getMovieLanguages() {
	return {
		labels: Object.keys(moviesPerLanguage), 
		datasets: [{
		label: "movies per language",
		data: Object.values(moviesPerLanguage),
	}]
	}
}

// Filmer per premiärmånad
const moviesPerMonth = {}
const monthNames = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
data.forEach((movie) => {
	const premiereDate = new Date(movie.Premiere);
	const monthYear = `${monthNames[premiereDate.getMonth()]}`;

if (moviesPerMonth[monthYear]) {
	moviesPerMonth[monthYear] += 1;
} else {
	moviesPerMonth[monthYear] = 1
}

})

export function getMoviesPerMonth() {
	return {
		labels: Object.keys(moviesPerMonth), 
		datasets: [{
		label: "movies per month",
		data: Object.values(moviesPerMonth),
	}]
}
		
	
}

// Hämta datan till längd på filmer

const moviesPerLength = {};
data.forEach((movie) => {
	const length = movie.Runtime;
	if (moviesPerLength[length] ) {
		moviesPerLength[length] += 1;
	} else {
		moviesPerLength[length] = 1;
	}
})


export function getMovieLength() {
	return {
		labels: Object.keys(moviesPerLength), 
		datasets: [{
		label: "movies per length",
		data: Object.values(moviesPerLength),
	}]
	}
}

// Hämta genre
export function getGenres() {

const genreMovies = {}	
console.log(genreMovies)
data.forEach((movie) => {
	const genre = movie.Genre;
	if (genre && genre !== 'undefined') {
		if (genreMovies[genre] ) {
		genreMovies[genre] += 1;
	} else {
		genreMovies[genre] = 1;
	}
	}
	
})




	return {
		labels: Object.keys(genreMovies), 
		datasets: [{
		label: "Different Genres",
		data: Object.values(genreMovies),
	}]
	}
}

