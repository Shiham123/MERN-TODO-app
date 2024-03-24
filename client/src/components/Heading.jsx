import {useSelector} from "react-redux"

const Heading = () => {
	const theme = useSelector((state) => state.theme.enabled)
	return (
		<div className="my-8">
			<span
				className={`text-5xl font-Lexend ${theme ? "text-dark-text-primary" : "text-text-primary"}`}
			>
				to
			</span>
			<span
				className={`text-5xl font-Lexend ${
					theme ? "text-dark-text-secondary" : "text-text-secondary"
				}`}
			>
				do.
			</span>
		</div>
	)
}

export default Heading
