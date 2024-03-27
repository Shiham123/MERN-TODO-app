import PropTypes from "prop-types"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const PerButton = (props) => {
	const {text, icon: Icon, to} = props
	const {enabled} = useSelector((state) => state.theme)
	return (
		<Link to={to}>
			<button
				className={`text-[#7a8aa4] font-Lexend w-full text-left rounded-lg px-2 flex justify-start items-center gap-2 py-1 ${
					enabled ? "focus:bg-[#2f2d36]" : "focus:bg-[#d3dee3]"
				}`}
			>
				{Icon && <Icon />}
				<span className="capitalize">{text}</span>
			</button>
		</Link>
	)
}

export default PerButton

PerButton.propTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired,
	to: PropTypes.string.isRequired,
}
