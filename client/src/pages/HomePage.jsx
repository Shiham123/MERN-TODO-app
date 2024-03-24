import Heading from "../components/Heading"
import TodoContainer from "../components/TodoContainer"
import UseTheme from "../hooks/UseTheme"

const HomePage = () => {
	const {themeSelection} = UseTheme()

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
