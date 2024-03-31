import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {FaEdit} from "react-icons/fa"
import {MdDelete} from "react-icons/md"

import {addedProject, editProject} from "../../redux/FormData/formDataSlice"

const AddInput = () => {
	const {enabled, isProjectInput} = useSelector((state) => state.theme.themeList)
	const {project} = useSelector((state) => state.formData)

	const [inputField, setInputField] = useState("")
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		if (event.key == "Enter") {
			dispatch(addedProject(inputField))
			setInputField("")
		}
	}

	const handleEditProject = (id, projectTitle) => {
		const newProjectTitle = window.prompt("Enter new project title", projectTitle)
		if (newProjectTitle !== null) {
			dispatch(editProject({projectId: id, newProjectTitle}))
		}
	}

	return (
		<div className="flex flex-col justify-center items-center mx-4">
			{isProjectInput && (
				<input
					placeholder="type here"
					type="text"
					onChange={(event) => setInputField(event.target.value)}
					onKeyDown={handleSubmit}
					value={inputField}
					className={`rounded-lg border-none outline-none w-full p-2 my-2 font-Lexend font-semibold tracking-widest ${
						enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
					}`}
				/>
			)}

			{project &&
				project.map((item, index) => {
					const {id, projectTitle} = item
					return (
						<div
							className={`rounded-lg border-none outline-none w-full p-2 my-2 font-Lexend font-semibold tracking-widest cursor-pointer ${
								enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
							}`}
							key={index}
						>
							<div className="flex flex-row justify-between items-center group">
								<button>{projectTitle}</button>
								<div className="flex gap-4">
									<FaEdit
										onClick={() => handleEditProject(id, projectTitle)}
										className="group-hover:block hidden"
										color={enabled ? "#7f5bf7" : "#f8917e"}
									/>

									<MdDelete
										className="group-hover:block hidden"
										color={enabled ? "#7f5bf7" : "#f8917e"}
									/>
								</div>
							</div>
						</div>
					)
				})}
		</div>
	)
}

export default AddInput
