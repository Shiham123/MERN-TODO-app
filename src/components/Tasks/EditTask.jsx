import {useDispatch, useSelector} from "react-redux"
import TaskBodyHeading from "../../shared/TaskBodyHeading"
import {RiArrowLeftSLine, RiStarFill, RiStarLine} from "react-icons/ri"
import {changeStar} from "../../redux/DarkLightSlice/themeSlice"
import {changeComponent} from "../../redux/BodyComponentSlice/componentSlice"

const EditTask = () => {
	const {enabled, starred} = useSelector((state) => state.theme.themeList)
	const {project} = useSelector((state) => state.formData)
	const dispatch = useDispatch()

	return (
		<div className="flex flex-col p-4">
			<form>
				{/* task name */}
				<section>
					<TaskBodyHeading todoHeading="Edit Task" />
					<div>
						<input
							placeholder="type here"
							type="text"
							name="title"
							className={`rounded-lg border-none outline-none w-full p-2 my-2 font-Lexend font-semibold tracking-widest ${
								enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
							}`}
						/>
					</div>
				</section>
				{/* Task note */}
				<section className="mt-4">
					<TaskBodyHeading todoHeading="Note" />
					<div>
						<textarea
							type="text"
							placeholder="Type here"
							name="note"
							className={`rounded-lg border-none outline-none font-Lexend font-semibold tracking-widest p-2 w-full h-[150px] py-2 my-2 ${
								enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
							}`}
						/>
					</div>
				</section>

				{/* task project and task date and star */}
				<main className="flex gap-4">
					<section className="my-4">
						<TaskBodyHeading todoHeading="project" />
						<select
							name="project"
							readOnly
							className={`rounded-lg border-none outline-none font-Lexend font-semibold tracking-widest focus:border-none focus:outline-none w-[200px] p-2 my-2 ${
								enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
							}`}
						>
							{project.map((item) => {
								const {projectTitle, id} = item
								return (
									<option className="focus:border-none focus:outline-none" key={id}>
										{projectTitle}
									</option>
								)
							})}
						</select>
					</section>

					<section className="my-4">
						<TaskBodyHeading todoHeading="Date" />
						<input
							type="date"
							name="date"
							className={`rounded-lg border-none outline-none font-Lexend font-semibold tracking-widest p-2 my-2 ${
								enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
							}`}
						/>
					</section>
					<section className="mt-14">
						{starred ? (
							<RiStarFill
								className="cursor-pointer"
								onClick={() => dispatch(changeStar(false))}
								color="#7a8db0"
								size={30}
							/>
						) : (
							<RiStarLine
								className="cursor-pointer"
								onClick={() => dispatch(changeStar(true))}
								color="#7a8db0"
								size={30}
							/>
						)}
					</section>
				</main>

				{/* Task submit and back button */}
				<section className="flex justify-between items-center">
					<RiArrowLeftSLine
						onClick={() => dispatch(changeComponent("allTask"))}
						className="cursor-pointer"
						size={40}
						color={`${enabled ? "#d3dee3" : "#2f2d36"}`}
					/>
					<button
						type="submit"
						className={`${
							enabled
								? "bg-gradient-to-t from-darkTextSecondary/70 to-darkTextSecondary text-darkTextPrimary"
								: "bg-gradient-to-t from-textSecondary/50 to-textSecondary text-textPrimary"
						} px-4 py-2 rounded-2xl font-Lexend font-medium tracking-widest`}
					>
						Submit Task
					</button>
				</section>
			</form>
		</div>
	)
}

export default EditTask
