import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {FaEdit} from "react-icons/fa"
import {MdDelete} from "react-icons/md"

import {addedProject} from "../../redux/FormData/formDataSlice"

const AddInput = () => {
	const {enabled, isProjectInput} = useSelector((state) => state.theme.themeList)
	const {project} = useSelector((state) => state.formData)

	const [inputField, setInputField] = useState("")
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		if (event.key == "Enter") {
			dispatch(addedProject(inputField))
		}
	}

	return (
		<div className="flex flex-col justify-center items-center mx-4">
			{isProjectInput && (
				<input
					type="text"
					onChange={(event) => setInputField(event.target.value)}
					onKeyDown={handleSubmit}
					className={`rounded-lg border-none outline-none w-full p-2 my-2 font-Lexend font-semibold tracking-widest ${
						enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
					}`}
				/>
			)}

			{project &&
				project.map((item, index) => (
					<div
						className={`rounded-lg border-none outline-none w-full p-2 my-2 font-Lexend font-semibold tracking-widest cursor-pointer ${
							enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
						}`}
						key={index}
					>
						<div className="flex flex-row justify-between items-center group">
							<button>{item}</button>
							<div className="flex gap-4">
								<FaEdit className="group-hover:hidden" color={enabled ? "#7f5bf7" : "#f8917e"} />
								<MdDelete className="group-hover:hidden" color={enabled ? "#7f5bf7" : "#f8917e"} />
							</div>
						</div>
					</div>
				))}
		</div>
	)
}

export default AddInput
