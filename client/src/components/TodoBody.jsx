import UseTheme from "../hooks/UseTheme"

const TodoBody = () => {
	const {themeSelection} = UseTheme()
	return <div className={`shadow-one ${themeSelection("bg", "secondary")}`}>this is todo body</div>
}

export default TodoBody
