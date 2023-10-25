import { useState } from "react";
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const [showNav, setShowNav] = useState('false')

	function handleClickNav() {
			setShowNav(!showNav)
		}
		
	
	
		return (
			
			<nav>
				<FontAwesomeIcon
					id="close-Icon" 
					onClick={handleClickNav} 
					icon={showNav ? faXmark : faBars} />
			
				<ul className={showNav ? 'nav-visible' : 'nav-hidden'}>
					
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
				</ul>

			</nav>
			
		)
	
	}

	export default NavBar
	
