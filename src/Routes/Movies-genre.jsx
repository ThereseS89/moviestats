
import { BarChartGenre } from "../components/Barchart"


const MoviesGenre = () => {

	return (
		
		<section className="flex">
			<h2 className="chart-head">Different Genres</h2>
			<div className="chart-container">
				<BarChartGenre />
			</div>
		</section>
		
	)
}

export default MoviesGenre;