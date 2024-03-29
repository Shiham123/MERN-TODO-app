import TodoBody from "./TodoBody"
import TodoNavbar from "./Sidebar/TodoNavbar"
import {useSelector} from "react-redux"

const TodoContainer = () => {
	const {closeNavbar} = useSelector((state) => state.theme.themeList)

	return (
		<div className="flex gap-4 p-8">
			{closeNavbar ? (
				<div className="fixed inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm z-50">
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-fit h-fit mx-auto text-center">
							<TodoNavbar />
						</div>
					</div>
				</div>
			) : (
				<TodoNavbar />
			)}
			<div className="flex gap-4">
				<TodoBody />
			</div>
		</div>
	)
}

export default TodoContainer
