import { useNavigate } from "react-router-dom"
const MoviesLength = () => {
	const navigate = useNavigate() 
	const handlebtnClick = () => {
		navigate('/MoviesGenre')
	}
	return (
		<section>
			<>HEJJ</>
			<button onClick={handlebtnClick}>NEXT</button>
		</section>

	)
}

export default MoviesLength