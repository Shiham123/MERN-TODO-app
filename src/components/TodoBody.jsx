import {useSelector} from "react-redux"

import AllTask from "./Tasks/AllTask"

const TodoBody = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div
			className={`${
				theme ? "bg-darkBgSecondary" : "bg-lightBgSecondary"
			} shadow-one w-[700px] h-[500px] sm:w-[500px] xs:w-[400px]`}
		>
			<AllTask />
		</div>
	)
}

export default TodoBody
