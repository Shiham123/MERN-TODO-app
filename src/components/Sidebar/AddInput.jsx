import {useSelector} from "react-redux"

const AddInput = () => {
	const {enabled, isProjectInput} = useSelector((state) => state.theme.themeList)
	return (
		<div className="flex flex-col justify-center items-center mx-4">
			{isProjectInput && (
				<input
					type="text"
					className={`rounded-lg border-none outline-none w-full p-2 my-2 font-Lexend font-semibold tracking-widest ${
						enabled ? "bg-[#2f2d36] text-white/50" : "bg-[#d3dee3] text-black/50"
					}`}
				/>
			)}
		</div>
	)
}

export default AddInput
