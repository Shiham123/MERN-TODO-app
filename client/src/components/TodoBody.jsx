import {useSelector} from "react-redux"

const TodoBody = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div
			className={`${
				theme ? "bg-darkBgSecondary" : "bg-lightBgSecondary"
			} shadow-one lg:w-[700px] md:w-full sm:w-full xs:w-full`}
		>
			This is todo body
		</div>
	)
}

export default TodoBody
