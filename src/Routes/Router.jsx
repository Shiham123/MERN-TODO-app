import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import AllTask from "../components/Tasks/AllTask"
import AddTask from "../components/Tasks/AddTask"
import TodoBody from "../components/TodoBody"
import StarredTask from "../components/Tasks/StarredTask"

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{index: true, element: <HomePage />},
			{
				path: "todo",
				element: <TodoBody />,
				children: [
					{index: true, element: <AllTask />},
					{path: "addTask", element: <AddTask />},
					{path: "starredTask", element: <StarredTask />},
				],
			},
		],
	},
])

export default router
