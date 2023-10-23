import { PieChartGenre } from "../components/Piechart"

const MoviesGenre = () => {

	return (
		<section className="flex">
			<h2 className="chart-head">Different Genres</h2>
			<div className="chart-container">
				<PieChartGenre />
			</div>
		</section>
	)
}

export default MoviesGenre