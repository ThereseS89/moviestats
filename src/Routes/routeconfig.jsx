import { createBrowserRouter } from "react-router-dom";
import  Root  from "./Root.jsx";

import Startpage from "../components/StartPage.jsx";
import MoviesGenre from "../Routes/Movies-genre.jsx";
import MoviesLanguage from "../Routes/Movies-languages.jsx";
import MoviesLength from "../Routes/Movies-length.jsx";
import MoviesPerMonth from "../Routes/Movies-per-month.jsx";

const router = createBrowserRouter ([
	{
		path: '/',
		element: <Root />,
				children: [
					{
						path: '/',
						element: <Startpage />
					},
					{
						path: '/MoviesGenre',
						element: <MoviesGenre />
					},
					{
						path: '/MoviesLanguage',
						element: <MoviesLanguage />
					},
					{
						path: '/MoviesLength',
						element: <MoviesLength />
					},
					{
						path: '/MoviesPerMonth',
						element: <MoviesPerMonth />
					}

				]
	}
])

export default router