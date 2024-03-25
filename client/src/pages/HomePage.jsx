import {useSelector} from "react-redux"
import TodoContainer from "../components/TodoContainer"

const HomePage = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div
			className={`${
				theme ? "bg-darkBgPrimary" : "bg-lightBgPrimary"
			} flex flex-col justify-center items-center`}
		>
			<TodoContainer />
		</div>
	)
}

export default HomePage
