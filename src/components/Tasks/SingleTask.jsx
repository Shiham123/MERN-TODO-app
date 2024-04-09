import {useSelector} from "react-redux"

import TaskBodyHeading from "../../shared/TaskBodyHeading"
import {RiStarFill, RiStarLine} from "react-icons/ri"

const SingleTask = () => {
	const {tasks} = useSelector((state) => state.formData)
	const {perTaskId} = useSelector((state) => state.component)
	const {enabled} = useSelector((state) => state.theme.themeList)

	const foundTask = tasks.find((item) => item.id === perTaskId)

	const {title, note, isStarred} = foundTask

	return (
		<div className="p-4">
			<TaskBodyHeading todoHeading="Task Details" />
			{foundTask && (
				<>
					<div>
						<div className="flex justify-between items-center border-b-4 border-darkBgPrimary">
							<h1
								className={`font-Lexend text-2xl py-8 ${
									enabled ? "text-lightBgPrimary" : "text-darkBgPrimary"
								}`}
							>
								{title}
							</h1>
							{isStarred ? (
								<RiStarFill className="cursor-pointer" color="#7a8db0" size={30} />
							) : (
								<RiStarLine className="cursor-pointer" color="#7a8db0" size={30} />
							)}
						</div>

						<p>{note}</p>
					</div>
				</>
			)}
		</div>
	)
}

export default SingleTask
