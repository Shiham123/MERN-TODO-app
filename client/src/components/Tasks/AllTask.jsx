import {useSelector} from "react-redux"
import {RiCheckboxBlankCircleLine, RiStarFill, RiStarLine} from "react-icons/ri"
import Button from "../../shared/Button"

const AllTask = () => {
	const {enabled} = useSelector((state) => state.theme)
	return (
		<div className="flex flex-col p-4">
			<h1
				className={`${
					enabled ? "text-darkTextSecondary" : "text-textSecondary"
				} font-Lexend font-medium text-xl tracking-wider`}
			>
				Tasks
			</h1>

			{/* Task items div */}
			<div className="flex justify-between items-center my-4 bg-[#d3dee3] hover:bg-[#c4cdd1] p-2 rounded-lg cursor-pointer transition-all duration-200 shadow-one hover:shadow-two">
				<div className="flex justify-center items-center gap-4">
					<RiCheckboxBlankCircleLine color="#7a8db0" />
					<p className="text-black/60 font-Lexend text-[17px] font-medium">Task One</p>
				</div>
				<div className="flex">
					<RiStarFill color="#7a8db0" size={20} />
					<RiStarLine color="#7a8db0" size={20} />
				</div>
			</div>

			{/* Add task button */}
			<div className="flex justify-end">
				<Button btnText="Add Task" />
			</div>
		</div>
	)
}

export default AllTask
