import { useNavigate } from "react-router-dom"
import LineChart from "../components/Linechart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { motion, easeIn } from "framer-motion"
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"


const MoviesLength = () => {

	const navigate = useNavigate() 

	const handlebtnClick = () => {
		navigate('/MoviesGenre')
	}
	const handlebtnClickBack = () => {
		navigate('/MoviesPerMonth')
	}

	return (
		<section className="flex">
			<motion.h2 
			initial= {{ opacity: 0}} 
			animate={{ opacity: 1}} 
			transition={{ delay: 1, duration: 0.75, ease: easeIn}}
			className="chart-head">
				Movies Length
			</motion.h2>
			
			<div className="chart-container">
				<div className="space-between">
					<FontAwesomeIcon icon={faCircleArrowLeft} onClick={handlebtnClickBack}className="chart-btn"/>
					<FontAwesomeIcon icon={faCircleArrowRight} onClick={handlebtnClick}className="chart-btn"/>
				</div>
				<LineChart />
			</div>
			
		</section>

	)
}

export default MoviesLength