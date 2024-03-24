import {FaPlus} from "react-icons/fa6"
import {useSelector} from "react-redux"

const AddProjects = () => {
	const theme = useSelector((state) => state.theme.enabled)
	return (
		<div>
			<button className="hover:scale-125 transition-all duration-200">
				<FaPlus color={`${theme ? "#8d8fd2" : "#ff7c7c"}`} />
			</button>
		</div>
	)
}

export default AddProjects
