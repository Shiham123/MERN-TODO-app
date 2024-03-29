import PropTypes from "prop-types"
import {useDispatch, useSelector} from "react-redux"
import {changeComponent} from "../../redux/BodyComponentSlice/componentSlice"

const PerButton = (props) => {
	const {text, icon: Icon, to} = props
	const {enabled} = useSelector((state) => state.theme.themeList)
	const dispatch = useDispatch()

	return (
		<button
			onClick={() => dispatch(changeComponent(to))}
			className={`text-[#7a8aa4] font-Lexend w-full text-left rounded-lg px-2 flex justify-start items-center gap-2 py-1 ${
				enabled ? "focus:bg-[#2f2d36]" : "focus:bg-[#d3dee3]"
			}`}
		>
			{Icon && <Icon />}
			<span className="capitalize">{text}</span>
		</button>
	)
}

export default PerButton

PerButton.propTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired,
	to: PropTypes.string.isRequired,
}
