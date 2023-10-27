import  { useNavigate }  from "react-router-dom"
import PieChart from "../components/PieChart"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"


const MoviesLanguage = () => {
	const navigate = useNavigate(); 

	const handlebtnClick = () => {
		navigate('/MoviesPerMonth')
	}


	return (
		<section className="flex">
			<h2 className="chart-head">Movies per language</h2>
			<div className="chart-container-pie flex">
				<FontAwesomeIcon icon={faCircleArrowRight} onClick={handlebtnClick}className="chart-btn"/>
				<PieChart />
			</div>
			
		</section>
	)
}

export default MoviesLanguage