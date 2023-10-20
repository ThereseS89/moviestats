import { Bar } from "react-chartjs-2";
import { getMoviesPerMonth } from "../assets/data/fetchData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const barConfig = getMoviesPerMonth()


function BarChart() {
	
	return  (
	
		<Bar data={barConfig} id="month-bar-chart"/>

	
	);
}




export default BarChart