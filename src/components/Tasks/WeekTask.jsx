import {useDispatch, useSelector} from "react-redux"
import TaskBodyHeading from "../../shared/TaskBodyHeading"
import {changeComponent, singleTaskId} from "../../redux/BodyComponentSlice/componentSlice"
import {completeTask, deleteTask, editTask, starredTask} from "../../redux/FormData/formDataSlice"
import {
	RiCheckboxBlankCircleLine,
	RiCheckboxCircleFill,
	RiStarFill,
	RiStarLine,
} from "react-icons/ri"
import {FaEdit} from "react-icons/fa"
import {MdDelete} from "react-icons/md"

const WeekTask = () => {
	const {tasks} = useSelector((state) => state.formData)
	const {enabled} = useSelector((state) => state.theme.themeList)
	const dispatch = useDispatch()

	const today = new Date()

	const startDate = new Date(today)
	startDate.setDate(startDate.getDate() - today.getDay())

	const endDate = new Date(today)
	endDate.setDate(endDate.getDate() + (6 - today.getDay()))

	const thisWeekTasks = tasks.filter((task) => {
		const taskDate = new Date(task.date)
		return taskDate >= startDate && taskDate <= endDate
	})

	const handleEdit = (id) => {
		dispatch(changeComponent("editTask"))
		dispatch(editTask({taskId: id}))
	}

	const handleSingleTask = (destination, taskId) => {
		dispatch(changeComponent(destination)), dispatch(singleTaskId(taskId))
	}

	return (
		<div className="flex flex-col p-4">
			<TaskBodyHeading todoHeading="This Week's tasks" />

			{thisWeekTasks?.map((item, index) => {
				const {title, id, isCompleted, isStarred, isStar} = item

				return (
					<div
						key={index}
						className={`${
							enabled ? "bg-[#2f2d36] hover:bg-black/10" : "bg-[#d3dee3] hover:bg-[#c4cdd1]"
						} flex justify-between items-center my-4 b p-2 rounded-lg cursor-pointer transition-all duration-200 shadow-one hover:shadow-two group`}
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
								onClick={() => handleSingleTask("single-task", id)}
								className={`${enabled ? "text-white/60" : "text-black/60"} ${
									isCompleted ? "line-through" : ""
								} font-Lexend text-[17px] font-medium`}
							>
								{title}
							</p>
						</div>

						<div className="flex justify-between items-center gap-4">
							<div className="flex gap-4">
								<FaEdit
									onClick={() => handleEdit(id)}
									className="group-hover:block hidden"
									color={enabled ? "#7f5bf7" : "#f8917e"}
								/>
								<MdDelete
									onClick={() => dispatch(deleteTask({taskId: id}))}
									className="group-hover:block hidden"
									color={enabled ? "#7f5bf7" : "#f8917e"}
								/>
							</div>
							<div>
								{isStarred || isStar ? (
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
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default WeekTask
