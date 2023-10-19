
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import { getMovieLanguages } from "../assets/data/fetchData";

const movieLanguage = getMovieLanguages()

function PieChart() {

	return (
		<Pie data={movieLanguage} />
	)
	
}

export default PieChart