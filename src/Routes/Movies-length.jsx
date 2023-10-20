import { useNavigate } from "react-router-dom"
import LineChart from "../components/Linechart"

const MoviesLength = () => {

	const navigate = useNavigate() 

	const handlebtnClick = () => {
		navigate('/MoviesGenre')
	}

	return (
		<section>
			<h2>Movies Length</h2>
			<LineChart />
			<button onClick={handlebtnClick}>NEXT</button>
		</section>

	)
}

export default MoviesLength