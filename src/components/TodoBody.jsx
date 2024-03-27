import {Outlet} from "react-router-dom" // Import Outlet
import {useSelector} from "react-redux"

const TodoBody = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div
			className={`${
				theme ? "bg-darkBgSecondary" : "bg-lightBgSecondary"
			} shadow-one w-[700px] h-[500px] sm:w-[500px] xs:w-[400px]`}
		>
			<Outlet />
		</div>
	)
}

export default TodoBody
