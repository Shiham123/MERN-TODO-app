import Heading from "../components/Heading"
import TodoContainer from "../components/TodoContainer"
import UseThemeToggle from "../hooks/UseThemeToggle"

const HomePage = () => {
	const { themeSelection } = UseThemeToggle()

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

export default HomePage
