import {useSelector} from "react-redux"
import TodoBody from "./TodoBody"
import TodoNavbar from "./Sidebar/TodoNavbar"

const TodoContainer = () => {
	const viewport = useSelector((state) => state.theme.viewport)

	return (
		<div className="flex gap-4 p-8">
			{viewport ? <></> : <TodoNavbar />}
			<TodoBody />
		</div>
	)
}

export default TodoContainer
