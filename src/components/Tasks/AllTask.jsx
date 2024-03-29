// package
import {useDispatch, useSelector} from "react-redux"
import {
	RiCheckboxBlankCircleLine,
	RiCheckboxCircleFill,
	RiStarFill,
	RiStarLine,
} from "react-icons/ri"

// imported
import Button from "../../shared/Button"
import TaskBodyHeading from "../../shared/TaskBodyHeading"

// slice
import {completeTask, starredTask} from "../../redux/FormData/formDataSlice"

const AllTask = () => {
	const {enabled} = useSelector((state) => state.theme.themeList)
	const {tasks} = useSelector((state) => state.formData)

	const dispatch = useDispatch()

	return (
		<div className="flex flex-col p-4">
			<TaskBodyHeading todoHeading="All Task" />

			{/* Task items div */}
			{tasks?.map((item, index) => {
				const {title, id, isCompleted, isStarred} = item

				return (
					<div
						key={index}
						className={`${
							enabled ? "bg-[#2f2d36] hover:bg-black/10" : "bg-[#d3dee3] hover:bg-[#c4cdd1]"
						} flex justify-between items-center my-4 b p-2 rounded-lg cursor-pointer transition-all duration-200 shadow-one hover:shadow-two`}
					>
						<div className="flex justify-center items-center gap-4">
							{isCompleted ? (
								<RiCheckboxCircleFill
									color="#7a8db0"
									onClick={() => dispatch(completeTask({completed: false, taskId: id}))}
								/>
							) : (
								<RiCheckboxBlankCircleLine
									onClick={() => dispatch(completeTask({completed: true, taskId: id}))}
									color="#7a8db0"
								/>
							)}

							<p
								className={`${enabled ? "text-white/60" : "text-black/60"} ${
									isCompleted ? "line-through" : ""
								} font-Lexend text-[17px] font-medium`}
							>
								{title}
							</p>
						</div>
						{isStarred ? (
							<RiStarFill
								onClick={() => dispatch(starredTask({starred: false, taskId: id}))}
								color="#7a8db0"
								size={20}
							/>
						) : (
							<RiStarLine
								onClick={() => dispatch(starredTask({starred: true, taskId: id}))}
								color="#7a8db0"
								size={20}
							/>
						)}
					</div>
				)
			})}

			{/* Add task button */}
			<div className="flex justify-end">
				<Button to="addTask" btnText="Add Task" />
			</div>
		</div>
	)
}

export default AllTask
