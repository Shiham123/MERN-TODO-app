import PropTypes from "prop-types"
import {useDispatch, useSelector} from "react-redux"
import {changeComponent} from "../redux/BodyComponentSlice/componentSlice"

const Button = (props) => {
	const {enabled} = useSelector((state) => state.theme)
	const {btnText, to} = props
	const dispatch = useDispatch()

	return (
		<>
			<button
				onClick={() => dispatch(changeComponent(to))}
				className={`${
					enabled
						? "bg-gradient-to-t from-darkTextSecondary/70 to-darkTextSecondary text-darkTextPrimary"
						: "bg-gradient-to-t from-textSecondary/50 to-textSecondary text-textPrimary"
				} px-4 py-2 rounded-2xl font-Lexend font-medium tracking-widest`}
			>
				{btnText}
			</button>
		</>
	)
}

export default Button

Button.propTypes = {btnText: PropTypes.string.isRequired, to: PropTypes.string.isRequired}
