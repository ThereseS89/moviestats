import { Bar } from "react-chartjs-2";
import { getMoviesPerMonth, getGenres } from "../assets/data/fetchData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const barConfig = getMoviesPerMonth()
const genreConfig = getGenres()

function BarChart() {
	
	return  (
	
		<Bar data={barConfig} id="month-bar-chart"/>

	
	);
}

export function BarChartGenre() {
	
	return  (
	
		<Bar data={genreConfig} id="genre-bar-chart"/>

	
	);
}




export default BarChart