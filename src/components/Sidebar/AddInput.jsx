import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {FaEdit} from "react-icons/fa"
import {MdDelete} from "react-icons/md"

import {addedProject, deleteProject, editProject} from "../../redux/FormData/formDataSlice"
import {showEditProjectInput} from "../../redux/DarkLightSlice/themeSlice"

const AddInput = () => {
	const {enabled, isProjectInput, isEditProjectInput} = useSelector(
		(state) => state.theme.themeList,
	)
	const {project} = useSelector((state) => state.formData)

	const [inputField, setInputField] = useState("")
	const [newProjectTitle, setNewProjectTitle] = useState("")
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		if (event.key == "Enter") {
			dispatch(addedProject(inputField))
			setInputField("")
		}
	}

	const handleEditProject = (id, newProjectTitle, event) => {
		if (event.key === "Enter") {
			dispatch(editProject({projectId: id, newProjectTitle}))
			dispatch(showEditProjectInput(false))
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
								{isEditProjectInput ? (
									<input
										placeholder={projectTitle}
										type="text"
										onKeyDown={(event) => handleEditProject(id, newProjectTitle, event)}
										value={newProjectTitle}
										onChange={(event) => setNewProjectTitle(event.target.value)}
										className={`rounded-lg border-none outline-none w-full  font-Lexend font-semibold tracking-widest ${
											enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
										}`}
									/>
								) : (
									<button>{projectTitle}</button>
								)}

								<div className="flex gap-4">
									<FaEdit
										onClick={() => dispatch(showEditProjectInput(true))}
										className="group-hover:block hidden"
										color={enabled ? "#7f5bf7" : "#f8917e"}
									/>

									<MdDelete
										onClick={() => dispatch(deleteProject({projectId: id}))}
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
