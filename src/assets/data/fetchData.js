// Hämta DATAN till de olika chartsen
import specialsData from './specials.json'
import documentariesData from './documentaries.json'
import featureFilmsData from './featureFilms.json'

console.log('specials: ', specialsData, 'documentaries: ', documentariesData, 'featureFilms: ', featureFilmsData )

const data = [...documentariesData, ...featureFilmsData, ...specialsData] 
// Valde specials i slutet för att motverka bugg, då det inte finns några filmer i maj i specialsDatan.


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
const sortedData = Object.entries(moviesPerLanguage).sort((a, b) => b[1] -a[1]).reduce((acc, [language, count]) => {
	acc[language] = count;
	return acc
}, {});


export function getMovieLanguages() {
	const colors = ['rgb(215, 37, 158)', 'rgb(179, 37, 215)', 'rgb(52, 6, 63)', 'rgb(50, 68, 228)', 'rgb(50, 228, 189)', 'rgb(8, 104, 83)', 'rgb(74, 234, 60)', 'rgb(203, 216, 25)', 'rgb(216, 54, 25)', '#ffffff', 'rgb(216, 130, 25)', 'rgb(41, 25, 216)', 'rgb(23, 184, 229)', '#cccccc', '#000000', 'rgb(23, 47, 229)', 'rgb(57, 147, 39)', 'rgb(245, 181, 240)', 'rgb(160, 249, 170)', 'rgb(97, 112, 134)' ]
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

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

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

export function getMovieLength() {
	return {
		labels: Object.keys(moviesPerLength), 
		datasets: [{
		label: "movies per length",
		data: Object.values(sortedDataRuntime),
		borderColor: 'linear-gradient(90deg, rgba(4,4,4,1) 3%, rgba(84,84,84,1) 100%)'
	}]
	}
}

// Hämta genre
export function getGenres() {
	const colors = [
		"#FF0000", // Röd
		"#00FF00", // Grön
		"#0000FF", // Blå
		"#FFFF00", // Gul
		"#FF00FF", // Lila
		"#00FFFF", // Turkos
		"#FFA500", // Apelsin
		"#008000", // Mörkgrön
		"#800080", // Mörklila
		"#008080", // Mörkturkos
		"#800000", // Mörkröd
		"#00C000", // Limegrön
		"#C00000", // Mörkröd
		"#C0C0C0", // Silver
		"#808080", // Grå
		"#F0E68C", // Khaki
		"#D2691E", // Choklad
		"#FFFFF0", // Ivory
		"#FAEBD7", // Antikvitt
		"#E6E6FA", // Lavendel
		"#F5DEB3", // Vete
		"#F5F5F5", // Vitrök
		"#FFE4B5", // Moccasin
		"#DDA0DD", // Plommon
		"#FF4500", // Rodnad
		"#4B0082", // Indigo
		"#F4A460", // Brun
		"#40E0D0", // Turkos
		"#32CD32", // Limegrön
		"#F08080", // Ljusrosa
		"#AFEEEE", // Ljus turkos
		"#7B68EE", // Mediumslateblue
		"#8A2BE2", // Blåviolett
		"#D3D3D3", // Ljusgrå
		"#5F9EA0", // Cadetblue
		"#7FFF00", // Chartreuse
		"#7CFC00", // Lawngreen
		"#20B2AA", // Ljus havsgrön
		"#00FFFF", // Cyan
		"#87CEEB", // Skyblue
		"#4682B4", // Stålblå
		"#1E90FF", // Dödskallesvart
		"#00008B", // Darkblue
		"#0000CD", // Mediumblue
		"#0000FF", // Blå
		"#8B0000", // Darkred
		"#B22222", // Firebrick
		"#FFD700", // Guld
		"#DAA520", // Goldenrod
		"#FFA07A", // Ljuslaxrosa
		"#CD5C5C", // Indiskt röd
		"#DDA0DD", // Lila
		"#800000", // Mörkröd
		"#8B008B", // Mörklila
		"#808000", // Oliv
		"#ADFF2F", // Greenyellow
		"#228B22", // Skogsgrön
		"#006400", // Mörkgrön
		"#FF00FF", // Magenta
		"#C71585", // Mediumvioletred
		"#BA55D3", // Mediumorchid
		"#DA70D6", // Orchid
		"#9370DB", // Mediumslateblue
		"#A0522D", // Sienna
		"#A52A2A", // Brun
		"#B8860B", // Mörkgul
		"#CD853F", // Perufärg
		"#E9967A", // Mörk laxrosa
		"#8B4513", // Saddlebrown
		"#556B2F", // Olivgrön
		"#808080", // Grå
		"#2F4F4F", // Darkslategray
		"#696969", // Dimgrå
		"#708090", // Slategray
		
	];

const genreMovies = {}	
console.log(genreMovies)
data.forEach((movie) => {
	const genre = movie.Genre;
	
	if (genreMovies[genre] ) {
		genreMovies[genre] += 1;
	} else {
		genreMovies[genre] = 1;
	}
	
})

	return {
		labels: Object.keys(genreMovies), 
		className: "custom-label",
		datasets: [{
		label: "Different Genres",
		data: Object.values(genreMovies),
		backgroundColor: colors
	}]
	}
}

