import { NavLink } from "react-router-dom"


const NavBar = () => {
	
		return (
			<nav>
				<ul>
					<div className="background">
						<li 
						className="li-start">
						<NavLink to={'/'}>START</NavLink>
							</li>
						<li className="li-language">
						<NavLink to={'/MoviesLanguage'}>LANGUAGE</NavLink>
						</li>
						<li className="li-premiere">
						<NavLink to={'/MoviesPerMonth'}>PREMIERES</NavLink>
						</li>
						<li className="li-runtime">
						<NavLink to={'/MoviesLength'}>RUNTIME</NavLink>
						</li>
						<li className="li-genre">
						<NavLink to={'/MoviesGenre'}>GENRE</NavLink>
							
						</li>
						<li className="li-search">
						<NavLink to={'/SearchResultContainer'}>SEARCH</NavLink>
						
						</li>
					</div>
				</ul>
			</nav>
		)
	
	}

	export default NavBar
	
