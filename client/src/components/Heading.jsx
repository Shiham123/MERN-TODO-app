import {useSelector} from "react-redux"

const Heading = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div className="my-8">
			<span
				className={`text-5xl font-Lexend ${theme ? "text-darkTextPrimary" : "text-textPrimary"}`}
			>
				to
			</span>
			<span
				className={`text-5xl font-Lexend ${
					theme ? "text-darkTextSecondary" : "text-textSecondary"
				}`}
			>
				do.
			</span>
		</div>
	)
}

export default Heading
