import UseThemeToggle from "../hooks/UseThemeToggle"

const TodoBody = () => {
	const { themeSelection } = UseThemeToggle()
	return <div className={`shadow-one ${themeSelection("bg", "secondary")}`}>this is todo body</div>
}

export default TodoBody
