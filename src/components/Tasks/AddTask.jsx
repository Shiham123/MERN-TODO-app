import {useSelector} from "react-redux"
import TaskBodyHeading from "../../shared/TaskBodyHeading"

const AddTask = () => {
	const {enabled} = useSelector((state) => state.theme)

	return (
		<div className="flex flex-col p-4">
			<section>
				<TaskBodyHeading todoHeading="Add Task" />
				<div>
					<input
						type="text"
						className={`rounded-lg border-none outline-none w-full py-2 my-2 ${
							enabled ? "bg-[#2f2d36]" : "bg-[#d3dee3]"
						}`}
					/>
				</div>
			</section>
			{/* --------------- */}
			<section className="mt-4">
				<TaskBodyHeading todoHeading="Note" />
				<div>
					<textarea
						type="text"
						placeholder="type here"
						className={`rounded-lg border-none outline-none text-white/50 font-Lexend font-semibold tracking-widest px-2 w-full h-[150px] py-2 my-2 ${
							enabled ? "bg-[#2f2d36]" : "bg-[#d3dee3]"
						}`}
					/>
				</div>
			</section>
		</div>
	)
}

export default AddTask
