import Heading from "./components/Heading"
import TodoContainer from "./components/TodoContainer"
import useThemeToggle from "./hooks/useThemeToggle"

const App = () => {
	const {themeSelection} = useThemeToggle()

	return (
		<div
			className={`${themeSelection(
				"bg",
				"primary",
			)} min-h-screen flex flex-col justify-center items-center`}
		>
			<Heading />
			<TodoContainer />
		</div>
	)
}

export default App
