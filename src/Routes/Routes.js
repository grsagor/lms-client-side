import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/home",
				element: <Home></Home>,
			},
			
		],
	},
]);
export default router;
