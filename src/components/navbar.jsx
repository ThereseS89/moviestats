
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { showNavState } from "../Atoms/showNavState";

const NavBar = () => {
	const [showNav, setShowNav] = useRecoilState(showNavState)

	function handleClickNav() {
			setShowNav(!showNav)
		}
	
		return (
			
			<nav>
				<div>
					<motion.button 
					onClick={handleClickNav}
					animate={showNav ? 'open' : 'closed'}
					className="nav-btn">
						<motion.span 
							className="bar"
							variants={{
										closed: {rotate: 0, y: 0},
										open: { rotate: 45, y: 12},
									}}>

						</motion.span>

						<motion.span 
							className="bar"
							variants={{
									closed: {opacity: 1},
									open: { opacity: 0},
								}}>
								
						</motion.span>

						<motion.span 
							className="bar"
							variants={{
								closed: {rotate: 0},
								open: { rotate: -45, y: -12},
							}}>

						</motion.span>

					</motion.button>
				</div>
				
			<AnimatePresence>
			{showNav && ( 
			<motion.div 
			variants={{
					open: { y: "0%", transition: {when: "beforeChildren"}},
					closed: { y: "-200%", transition: {when: "afterChildren"}},
					}}
			initial="closed"
			animate="open"
			exit="closed"
			className="nav-bar">

			<motion.div variants={
				{open: { y: "0%", opacity: 1},
				closed: { y: "25%", opacity: 0}}
			}>
				<ul className={showNav ? 'visible' : 'hidden'}>
					
						<li 
						className="li-start">
						<NavLink onClick={ () => setShowNav(false)} to={'/'}>START</NavLink>
							</li>
						<li className="li-language">
						<NavLink onClick={ () => setShowNav(false)}to={'/MoviesLanguage'}>LANGUAGE</NavLink>
						</li>
						<li className="li-premiere">
						<NavLink onClick={() => setShowNav(false)}to={'/MoviesPerMonth'}>PREMIERES</NavLink>
						</li>
						<li className="li-runtime">
						<NavLink onClick={() => setShowNav(false)}to={'/MoviesLength'}>RUNTIME</NavLink>
						</li>
						<li className="li-genre">
						<NavLink onClick={() => setShowNav(false)}to={'/MoviesGenre'}>GENRE</NavLink>
							
						</li>
						<li className="li-search">
						<NavLink to={'/SearchResultContainer'}>SEARCH</NavLink>
						
						</li>
				</ul>
				</motion.div>
				</motion.div> 
			)}
			</AnimatePresence>
			</nav>
			
		)
	
	}

	export default NavBar
	
