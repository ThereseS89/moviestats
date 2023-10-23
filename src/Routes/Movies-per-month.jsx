// Routen som visar diagramet
import BarChart from "../components/Barchart"
import { useNavigate } from "react-router-dom"

const MoviesPerMonth = () => {
	const navigate = useNavigate() 
	const handlebtnClick = () => {
		navigate('/MoviesLength')
	}

	return (
		<section className="flex">
			<h2 className="chart-head">Movies</h2>
			<div className="chart-container">
				<BarChart />
			</div>
	
		<button className="chart-btn" onClick={handlebtnClick}>next</button>
		</section>

	)
}

export default MoviesPerMonth