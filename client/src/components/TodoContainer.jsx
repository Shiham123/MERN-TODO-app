import TodoBody from "./TodoBody"
import TodoNavbar from "./Sidebar/TodoNavbar"
import {useSelector} from "react-redux"

const TodoContainer = () => {
	const {viewport} = useSelector((state) => state.theme)
	return (
		<div className="flex gap-4 p-8">
			{!viewport && <TodoNavbar />}
			<TodoBody />
		</div>
	)
}

export default TodoContainer
