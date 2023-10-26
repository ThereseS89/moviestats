
import { BarChartGenre } from "../components/Barchart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const MoviesGenre = () => {
	const navigate = useNavigate(); 
	const handlebtnClickBack = () => {
		navigate('/MoviesLength')
	}

	return (
		
		<section className="flex">
			<h2 className="chart-head">Different Genres</h2>
			<div className="chart-container">
			<FontAwesomeIcon icon={faCircleArrowLeft} onClick={handlebtnClickBack}className="chart-btn"/>
				<BarChartGenre />
			</div>
		</section>
		
	)
}

export default MoviesGenre;