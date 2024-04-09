import {useSelector} from "react-redux"

import TaskBodyHeading from "../../shared/TaskBodyHeading"

const SingleTask = () => {
	const {tasks} = useSelector((state) => state.formData)
	const {perTaskId} = useSelector((state) => state.component)

	const foundTask = tasks.find((item) => item.id === perTaskId)

	const {title, note} = foundTask

	return (
		<div className="p-4">
			<TaskBodyHeading todoHeading="Task Details" />
			{foundTask && (
				<>
					<div>
						<h1>{title}</h1>
						<p>{note}</p>
					</div>
				</>
			)}
		</div>
	)
}

export default SingleTask
