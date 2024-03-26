import {useDispatch, useSelector} from "react-redux"
import {
	RiCheckboxBlankCircleLine,
	RiCheckboxCircleFill,
	RiStarFill,
	RiStarLine,
} from "react-icons/ri"
import Button from "../../shared/Button"
import {changeStar, completeTask} from "../../redux/DarkLightSlice/themeSlice"

const AllTask = () => {
	const {enabled, starred, completedTask} = useSelector((state) => state.theme)
	const dispatch = useDispatch()

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
			<div
				className={`${
					enabled ? "bg-[#2f2d36] hover:bg-black/10" : "bg-[#d3dee3] hover:bg-[#c4cdd1]"
				} flex justify-between items-center my-4 b p-2 rounded-lg cursor-pointer transition-all duration-200 shadow-one hover:shadow-two`}
			>
				<div className="flex justify-center items-center gap-4">
					{completedTask ? (
						<RiCheckboxCircleFill color="#7a8db0" onClick={() => dispatch(completeTask(false))} />
					) : (
						<RiCheckboxBlankCircleLine
							onClick={() => dispatch(completeTask(true))}
							color="#7a8db0"
						/>
					)}
					<p
						className={`${enabled ? "text-white/60" : "text-black/60"} ${
							completedTask ? "line-through" : ""
						} font-Lexend text-[17px] font-medium`}
					>
						Task One
					</p>
				</div>
				{starred ? (
					<RiStarFill onClick={() => dispatch(changeStar(false))} color="#7a8db0" size={20} />
				) : (
					<RiStarLine onClick={() => dispatch(changeStar(true))} color="#7a8db0" size={20} />
				)}
			</div>

			{/* Add task button */}
			<div className="flex justify-end">
				<Button btnText="Add Task" />
			</div>
		</div>
	)
}

export default AllTask