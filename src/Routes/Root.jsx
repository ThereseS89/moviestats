import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import {  Outlet } from 'react-router-dom'
import Header from '../components/Header'
import NavBar from '../components/navbar'
import { showNavState } from '../Atoms/showNavState'
import { easeInOut } from 'framer-motion'

const Root = () => {
	const [showNav, setShowNav] = useRecoilState(showNavState)
	const location = useLocation()
	return (
		
		<>
			<Header />
			<NavBar />
			<main onClick={() => setShowNav(false)}>
			<AnimatePresence key={location.pathname}>	
			<motion.div 
				initial={{x: '-100%'}}
				animate={{x: 0}}
				transition={{duration: 1.5, ease: easeInOut }}
				exit={{ x: '100%' }}>
				<Outlet />
			</motion.div>
			</AnimatePresence>	
			</main>
		</>
		
	)
}

export default Root