import {useSelector} from "react-redux"
import Heading from "../components/Heading"
import TodoContainer from "../components/TodoContainer"

const HomePage = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div
			className={`${
				theme ? "bg-darkBgPrimary" : "bg-lightBgPrimary"
			} min-h-screen flex flex-col justify-center items-center`}
		>
			<Heading />
			<TodoContainer />
		</div>
	)
}

export default HomePage
