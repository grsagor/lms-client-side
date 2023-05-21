import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Post from "../Shared/Posts/Post/Post";
import Assignment from "../Shared/Posts/Assignment/Assignment";
import Quiz from "../Shared/Posts/Quiz/Quiz";
import AddQuiz from "../Shared/Posts/Quiz/AddQuiz";
import Addtask from "../Shared/Posts/Tasks/Addtask";
import SubmitTask from "../Shared/Posts/Tasks/SubmitTask";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				loader: ()=> {
					return fetch('http://localhost:5000/classes')
				},
				element: <Home></Home>,
				children: [
					{
						path: '/',
						element: <Post></Post>
					}
				]
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
			{
				path: "/assignment",
				element: <Assignment></Assignment>,
			},
			{
				path: "/quiz",
				element: <Quiz></Quiz>,
			},	
			{
				path: "/addquiz",
				element: <AddQuiz></AddQuiz>,
			},
			{
				path: "/addtask",
				element: <Addtask></Addtask>
			},	
			{
				path: "/submittask",
				element: <SubmitTask></SubmitTask>
			},		
		],
	},
]);
export default router;
