import { Chart as ChartJS, 
	LineElement, PointElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(LineElement, PointElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

import { Line } from 'react-chartjs-2';


import { getMovieLength } from "../assets/data/fetchData";


const movieLength = getMovieLength()

function LineChart() {
	return (
		
			<Line data={movieLength} id="length-line-chart"/>
		
	)
}

export default LineChart