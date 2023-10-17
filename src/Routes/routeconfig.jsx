import { createBrowserRouter } from "react-router-dom";
import  Root  from "./Root.jsx";

import Startpage from "../components/StartPage.jsx";

const router = createBrowserRouter ([
	{
		path: '/',
		element: <Root />,
				children: [
					{
						path: '/',
						element: <Startpage />
					},

				]
	}
])

export default router