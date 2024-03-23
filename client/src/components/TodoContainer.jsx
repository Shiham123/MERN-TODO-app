import TodoBody from "./TodoBody"
import TodoNavbar from "./TodoNavbar"

const TodoContainer = () => {
	return (
		<div className="flex gap-8">
			<TodoNavbar />
			<TodoBody />
		</div>
	)
}

export default TodoContainer
