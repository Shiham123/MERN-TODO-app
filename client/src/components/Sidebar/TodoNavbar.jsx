import {useSelector} from "react-redux"
import DarkLightBtn from "./DarkLightBtn"
import TodoButton from "./TodoButton"
import TodoOptions from "./TodoOptions"

const TodoNavbar = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div className={`${theme ? "bg-darkBgSecondary" : "bg-lightBgSecondary"}`}>
			{/* div one */}
			<div className="w-[300px] px-4 py-2 rounded-2xl shadow-two">
				<div className="flex flex-row justify-between">
					<TodoOptions />
					<DarkLightBtn />
				</div>
				<TodoButton />
			</div>
			{/* div two */}
			<div></div>
		</div>
	)
}

export default TodoNavbar
