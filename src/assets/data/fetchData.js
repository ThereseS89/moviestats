// Hämta DATAN till de olika chartsen
import specialsData from './specials.json'
import documentariesData from './documentaries.json'
import featureFilmsData from './featureFilms.json'

console.log('specials: ', specialsData, 'documentaries: ', documentariesData, 'featureFilms: ', featureFilmsData )

const data = [...specialsData, ...documentariesData, ...featureFilmsData] 

// Hur många Filmer på varje språk

export function getMovieLanguages() {
	return {
		labels: data.map(obj => obj.Language), 
		datasets: [{
		label: "movies per language",
		data: data.map(obj => obj.data),
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