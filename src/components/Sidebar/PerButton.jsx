import PropTypes from "prop-types"
import {useSelector} from "react-redux"

const PerButton = (props) => {
	const {text, icon: Icon} = props
	const theme = useSelector((state) => state.theme.enabled)
	return (
		<button
			className={`text-[#7a8aa4] font-Lexend w-full text-left rounded-lg px-2 flex justify-start items-center gap-2 py-1 ${
				theme ? "focus:bg-[#2f2d36]" : "focus:bg-[#d3dee3]"
			}`}
		>
			{Icon && <Icon />}
			<span className="capitalize">{text}</span>
		</button>
	)
}

export default PerButton

PerButton.propTypes = {text: PropTypes.string.isRequired, icon: PropTypes.elementType.isRequired}
