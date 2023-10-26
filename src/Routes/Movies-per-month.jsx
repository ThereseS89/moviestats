// Routen som visar diagramet
import BarChart from "../components/Barchart"
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'
import { easeIn } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"

const MoviesPerMonth = () => {
	const navigate = useNavigate() 
	const handlebtnClick = () => {
		navigate('/MoviesLength')
	}
	const handlebtnClickBack = () => {
		navigate('/MoviesLanguage')
	}

	return (
		<section className="flex">
			
			<motion.div 
			initial= {{ opacity: 0}} 
			animate={{ opacity: 1}} 
			transition={{ duration: 0.75, ease: easeIn}}>
				<h2 className="chart-head">Movies per month</h2>
				
			</motion.div>
			<div className="chart-container">
			<div className="space-between">
				<FontAwesomeIcon icon={faCircleArrowLeft} onClick={handlebtnClickBack}className="chart-btn"/>
				<FontAwesomeIcon icon={faCircleArrowRight} onClick={handlebtnClick}className="chart-btn"/>
			</div>
				
				<BarChart />
			</div>
	
		
		</section>

	)
}

export default MoviesPerMonth