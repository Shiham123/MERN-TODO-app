import useThemeToggle from "../hooks/useThemeToggle"

const Heading = () => {
	const {headingColor} = useThemeToggle()
	return (
		<div className="my-8">
			<span className={`text-5xl font-Lexend ${headingColor("text", "primary")}`}>to</span>
			<span className={`text-5xl font-Lexend ${headingColor("text", "secondary")}`}>do.</span>
		</div>
	)
}

export default Heading
