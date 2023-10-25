import Search from "./Search"
import {motion} from 'framer-motion'
import { easeIn } from "framer-motion"


const Header = () => {
	
	return (
		<header>
			<motion.img
				animate = {{ rotate: 360}}
				transition = {{duration: 2, ease: easeIn}}
				src='./src/assets/imgs/logo.png' />
			<h1 className="header-head"> MOVIESTATS </h1>
			<p className="header-underline"> - A statistic adventure from 
				<motion.div 
				animate = {{ x: 200, y: 10, scale: 2}}
				initial = {{ scale: 0 }}
				transition = {{duration: 3, delay: 2}}
				exit={{ scale: 0}}>
					<span>MovieFlex</span>
					</motion.div>
				</p>
			<Search />
		</header>
	)
		
}

export default Header