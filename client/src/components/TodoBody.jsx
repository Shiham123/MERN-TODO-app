import {useSelector} from "react-redux"

const TodoBody = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div
			className={`${theme ? "bg-darkBgSecondary" : "bg-lightBgSecondary"} shadow-one w-[700px]`}
		></div>
	)
}

export default TodoBody
