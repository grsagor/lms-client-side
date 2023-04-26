import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Post from "../Shared/Posts/Post/Post";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},	
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/post",
				element: <Post></Post>,
			},				
		],
	},
]);
export default router;
