import  { useNavigate }  from "react-router-dom"
import PieChart from "../components/PieChart"


const MoviesLanguage = () => {
	const navigate = useNavigate(); 

	const handlebtnClick = () => {
		navigate('/MoviesPerMonth')
	}


	return (
		<section className="flex">
			<h2 className="chart-head">Movies per language</h2>
			<div className="chart-container">
				<PieChart />
			</div>
			<button className="chart-btn" onClick={handlebtnClick}>NEXT</button>
		</section>
	)
}

export default MoviesLanguage