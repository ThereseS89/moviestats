import { useNavigate } from "react-router-dom"
import LineChart from "../components/Linechart"
import { motion, easeIn } from "framer-motion"


const MoviesLength = () => {

	const navigate = useNavigate() 

	const handlebtnClick = () => {
		navigate('/MoviesGenre')
	}

	return (
		<section className="flex">
			<motion.h2 
			initial= {{ opacity: 0}} 
			animate={{ opacity: 1}} 
			transition={{ duration: 0.75, ease: easeIn}}
			className="chart-head">
				Movies Length
			</motion.h2>
			
			<div className="chart-container">
				<LineChart />
			</div>
			<motion.button className="chart-btn" onClick={handlebtnClick}>NEXT</motion.button>
		</section>

	)
}

export default MoviesLength