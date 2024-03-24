import useThemeToggle from "../hooks/useThemeToggle"

const TodoBody = () => {
	const {themeSelection} = useThemeToggle()
	return <div className={`shadow-one ${themeSelection("bg", "secondary")}`}>this is todo body</div>
}

export default TodoBody
