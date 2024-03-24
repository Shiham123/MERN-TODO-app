import {useSelector} from "react-redux"
import DarkLightBtn from "./DarkLightBtn"
import TodoButton from "./TodoButton"
import TodoOptions from "./TodoOptions"
import AddProjects from "./AddProjects"

const TodoNavbar = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div
			className={`${theme ? "bg-darkBgSecondary" : "bg-lightBgSecondary"} rounded-2xl shadow-one`}
		>
			{/* div one */}
			<div className="w-[300px] px-4 py-2">
				<div className="flex flex-row justify-between">
					<TodoOptions text="filter" />
					<DarkLightBtn />
				</div>
				<TodoButton />
			</div>
			{/* div two */}
			<div className="w-[300px] px-4 py-2 flex justify-between items-center">
				<TodoOptions text="projects" />
				<AddProjects />
			</div>
		</div>
	)
}

export default TodoNavbar
