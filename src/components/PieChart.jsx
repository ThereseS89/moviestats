import specialsData from '../assets/data/specials.json'
import documentariesData from '../assets/data/documentaries.json'
import featureFilmsData from '../assets/data/featureFilms.json'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import {colors} from '../assets/data/colors'
const data = [  ...specialsData, ...documentariesData, ...featureFilmsData ] 



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


function getMovieLanguages() {
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



function PieChart() {
const movieLanguage = getMovieLanguages()
	return (
		
			<Pie data={movieLanguage} id="language-pie-chart"/>
		
	)
	
	
	
}





export default PieChart