import { useNavigate } from "react-router-dom"


const Startpage = () => {

	
	const navigate = useNavigate() 
	const handlebtnClick = () => {
		navigate('/MoviesLanguage')
	}

	return (
		<div className="start-container">
			<button onClick={handlebtnClick}
			className="start-btn">IT ALL STARTS WITH ONE CLICK</button>
		</div>
	)

}

	

export default Startpage