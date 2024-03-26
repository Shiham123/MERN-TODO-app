import PropTypes from "prop-types"
import {useSelector} from "react-redux"

const Button = (props) => {
	const {enabled} = useSelector((state) => state.theme)
	const {btnText} = props
	return (
		<>
			<button
				className={`${
					enabled
						? "bg-gradient-to-t from-darkTextSecondary/70 to-darkTextSecondary text-darkTextPrimary"
						: "bg-gradient-to-t from-textSecondary/50 to-textPrimary/50 text-textPrimary"
				} px-4 py-2 rounded-2xl font-Lexend font-medium tracking-widest`}
			>
				{btnText}
			</button>
		</>
	)
}

export default Button

Button.propTypes = {btnText: PropTypes.string.isRequired}
