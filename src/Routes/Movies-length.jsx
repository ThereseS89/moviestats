import { useNavigate } from "react-router-dom"
import LineChart from "../components/Linechart"

const MoviesLength = () => {

	const navigate = useNavigate() 

	const handlebtnClick = () => {
		navigate('/MoviesGenre')
	}

	return (
		<section className="flex">
			<h2 className="chart-head">Movies Length</h2>
			<div className="chart-container">
				<LineChart />
			</div>
			<button className="chart-btn" onClick={handlebtnClick}>NEXT</button>
		</section>

	)
}

export default MoviesLength