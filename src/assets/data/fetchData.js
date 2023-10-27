// Hämta DATAN till de olika chartsen
import specialsData from './specials.json'
import documentariesData from './documentaries.json'
import featureFilmsData from './featureFilms.json'
import {colorsGenre,
		monthNames,
		colors,
		languageData} from './constants'

const data = [ ...featureFilmsData, ...documentariesData, ...specialsData] 
// Valde specials i slutet för att motverka bugg, då det inte finns några filmer i maj i specialsDatan.



// Hur många Filmer på varje språk - Fick flytta ut detta till
const moviesPerLanguage = {};
languageData.forEach((movie) => {
	const language = movie.Language
	if (moviesPerLanguage[language]) {
		moviesPerLanguage[language] += 1;
	} else {
		moviesPerLanguage[language] = 1
	}
})
const sortedData = Object.entries(moviesPerLanguage).sort((a, b) => b[1] -a[1]).reduce((acc, [language, count]) => {
	acc[language] = count;
	return acc
}, {});


export function getMovieLanguages() {
	console.log('sortedDAta: ', sortedData, 'moviesPerLanguage: ', moviesPerLanguage)
	return {
		labels: Object.keys(moviesPerLanguage), 
		datasets: [{
		label: "movies per language",
		data: Object.values(sortedData),
		backgroundColor: colors,
		borderColor: '#000000',

	}]
	}
}


// Filmer per premiärmånad

function countMoviesPerMonth(data) {
const moviesPerMonth = {January: 0, February: 0, March: 0, April: 0, May: 0, June: 0, July: 0, August: 0, September: 0, October: 0, November: 0, December: 0};
data.forEach((movie) => {
	const premiereDate = new Date(movie.Premiere);
	const month = `${monthNames[premiereDate.getMonth()]}`;

if (moviesPerMonth[month]) {
	moviesPerMonth[month] += 1;
} else {
	moviesPerMonth[month] = 1
}
})
 return moviesPerMonth
}

const moviesPerMonthFeature = countMoviesPerMonth(featureFilmsData)
const moviesPerMonthDocumentaries = countMoviesPerMonth(documentariesData)
const moviesPerMonthSpecials = countMoviesPerMonth(specialsData)


//Hämtar premiärdatum

export function getMoviesPerMonth() {

	const labels =	monthNames
	const datasets = [ 
		{
		label: "FeatureFilms",
		data: Object.values(moviesPerMonthFeature),
		backgroundColor: 'rgb(215, 37, 158)', 
		borderColor: '#000000',
		borderWidth: 1
		},

		{
		label: "Documentaries",
		data: Object.values(moviesPerMonthDocumentaries),
		backgroundColor: 'rgb(52, 6, 63)', 
		borderColor: '#000000',
		borderWidth: 1

		},
		{
		label: "Specials",
		data: Object.values(moviesPerMonthSpecials),
		backgroundColor: 'rgb(179, 37, 215)', 	
		borderColor: '#000000',	
		borderWidth: 1
		}
	]

	return {
		labels,
		datasets 
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


const sortedDataRuntime = Object.entries(moviesPerLength).sort((a, b) => a[1] - b[1]).reduce((acc, [movie, count]) => {
	acc[movie] = count;
	return acc
}, {});

console.log('längd: ', moviesPerLength)


export function getMovieLength() {
	return {
		labels:Object.keys(sortedDataRuntime) , 
		datasets: [{
		label: "movies per length",
		data: Object.values(sortedDataRuntime),
		borderColor: '#ffffff',
	}]
	}
}




// Hämta genre
export function getGenres() {

const genreMovies = {}	
console.log(genreMovies)
data.forEach((movie) => {
	const genre = movie.Genre;

	if(!genre) {
		movie.Genre = 'Documentaries';
		genreMovies['Documentaries'] = (genreMovies['Documentaries'] || 0) + 1;
	
	} else {
	
	if (genreMovies[genre] ) {
		genreMovies[genre] += 1;
	} else {
		genreMovies[genre] = 1;
	}
	}
})

	return {
		labels:Object.keys(genreMovies) , 
		className: "custom-label",

		datasets: [{
		label: 'movies', 
		data: Object.values(genreMovies) ,
		backgroundColor: colorsGenre
	}]
	}
}

