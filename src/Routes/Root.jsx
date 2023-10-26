
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import {  Outlet } from 'react-router-dom'
import Header from '../components/Header'
import NavBar from '../components/navbar'


const Root = () => {
	
		
	const location = useLocation()
	return (
		
		<>
			<Header />
			<NavBar />
			<main>
			<AnimatePresence key={location.pathname}>	
			<motion.div 
				initial={{x: '-100%'}}
				animate={{x: 0}}
				transition={{duration: 2, ease: [0.22, 1, 0.36, 1] }}
				exit={{ x: '100%' }}>
				<Outlet/>
			</motion.div>
			</AnimatePresence>	
			</main>
		</>
		
	)
}

export default Root