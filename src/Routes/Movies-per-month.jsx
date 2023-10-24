// Routen som visar diagramet
import BarChart from "../components/Barchart"
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'
import { easeIn } from "framer-motion"

const MoviesPerMonth = () => {
	const navigate = useNavigate() 
	const handlebtnClick = () => {
		navigate('/MoviesLength')
	}

	return (
		<section className="flex">
			<motion.div 
			initial= {{ opacity: 0}} 
			animate={{ opacity: 1}} 
			transition={{ duration: 0.75, ease: easeIn}}>
				<h2 className="chart-head">Movies</h2>
			</motion.div>
			<div className="chart-container">
				<BarChart />
			</div>
	
		<button className="chart-btn" onClick={handlebtnClick}>next</button>
		</section>

	)
}

export default MoviesPerMonth