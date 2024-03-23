import PropTypes from "prop-types"

const PerButton = (props) => {
	const {text, icon: Icon} = props
	return (
		<button className="text-[#7a8aa4] font-Lexend hover:bg-[#d3dee3] w-full text-left rounded-lg px-2 flex justify-start items-center gap-2 py-1">
			{Icon && <Icon />}
			<span className="capitalize">{text}</span>
		</button>
	)
}

export default PerButton

PerButton.propTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired,
}
