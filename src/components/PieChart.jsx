
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import { getMovieLanguages, getGenres } from "../assets/data/fetchData";

const movieLanguage = getMovieLanguages()
const genreConfig = getGenres()
function PieChart() {

	return (
		
			<Pie data={movieLanguage} id="language-pie-chart"/>
		
	)
	
	
	
}


export function PieChartGenre() {
	
	return  (
	
		<Pie data={genreConfig} id="genre-pie-chart"/>

	
	);
}


export default PieChart