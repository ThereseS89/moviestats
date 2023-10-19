// Routen som visar diagramet
import BarChart from "../components/Barchart"
import { useNavigate } from "react-router-dom"

const MoviesPerMonth = () => {
	const navigate = useNavigate() 
	const handlebtnClick = () => {
		navigate('/MoviesLength')
	}

	return (
		<section>
			<h2>Movies</h2>
			<BarChart />
	
		<button onClick={handlebtnClick}>next</button>
		</section>

	)
}

export default MoviesPerMonth