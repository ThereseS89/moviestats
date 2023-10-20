import  { useNavigate }  from "react-router-dom"
import PieChart from "../components/PieChart"


const MoviesLanguage = () => {
	const navigate = useNavigate(); 

	const handlebtnClick = () => {
		navigate('/MoviesPerMonth')
	}


	return (
		<section>
			<h2>Movies per language</h2>
			<PieChart />
			<button onClick={handlebtnClick}>NEXT</button>
		</section>
	)
}

export default MoviesLanguage