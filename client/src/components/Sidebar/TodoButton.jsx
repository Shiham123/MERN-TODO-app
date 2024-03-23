import PerButton from "./PerButton"
import {AiFillCalendar, AiFillStar, AiOutlineCalendar, AiOutlinePicture} from "react-icons/ai"

const TodoButton = () => {
	return (
		<div>
			<div className="flex flex-col justify-start items-start my-4 gap-[10px]">
				<PerButton text="all" icon={AiOutlinePicture} />
				<PerButton text="starred" icon={AiFillStar} />
				<PerButton text="Today" icon={AiFillCalendar} />
				<PerButton text="Week" icon={AiOutlineCalendar} />
			</div>
		</div>
	)
}

export default TodoButton
