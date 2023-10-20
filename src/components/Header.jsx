import Search from "./Search"

const Header = () => {

	return (
		<header>
			<img src='./src/assets/imgs/logo.png'></img>
			<h1 className="header-head"> MOVIESTATS </h1>
			<p className="header-underline"> - A statistic adventure from <span>MovieFlex</span></p>
			<Search />
		</header>
	)
		
}

export default Header