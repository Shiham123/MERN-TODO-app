import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
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
		</div>
	)
}

export default AddInput
