import TodoBody from "./TodoBody"
import TodoNavbar from "./Sidebar/TodoNavbar"

const TodoContainer = () => {
	return (
		<div className="flex gap-4">
			<TodoNavbar />
			<TodoBody />
		</div>
	)
}

export default TodoContainer
